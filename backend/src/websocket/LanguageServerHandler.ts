import WebSocket from "ws";
import P4Environment from "../P4Environment";

export default function (
  ws: WebSocket,
  environment: string,
  language: string
): void {
  const envInstance = P4Environment.getActiveEnvironment(`${environment}`);
  if (envInstance !== undefined) {
    Promise.all([
      envInstance.getLanguageServerPort(),
      envInstance.getIPAddress(),
    ]).then((result) => {
      const [port, ipAddress] = result;
      const client = new WebSocket(
        "ws://" + ipAddress + ":" + port + "/" + language
      );
      client.on("open", () => {
        ws.on("message", (data) => {
          console.log(data);
          client.send(data);
        });
        client.on("message", (data) => {
          console.log(data);
          ws.send(data);
        });
      });
      client.on("error", (err) => {
        console.log(err);
        ws.close();
      });
      client.on("close", () => ws.close());
      ws.on("close", () => client.close());
    });
  }
}

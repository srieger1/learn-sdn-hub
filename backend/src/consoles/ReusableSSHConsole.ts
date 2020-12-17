import { EventEmitter } from "events";
import { Client } from "ssh2";
import fs from "fs";

export interface Console {
  on(event: "ready", listener: () => void): this;
  on(event: "data", listener: (data: string) => void): this;
  on(event: "close", listener: () => void): this;
  write(data: string): void;
  writeLine(data: string): void;
  close(): void;
}

process.on("uncaughtException", (err) =>
  console.log("uncaught exception: ", err.stack)
);

type CustomizedSSHClient = Client & {
  ready: boolean;
};

export default class SSHConsole extends EventEmitter implements Console {
  private command: string;
  private cwd: string;
  private args: Array<string>;
  private stream: any;
  private static sshSessions: Map<string, CustomizedSSHClient> = new Map();

  constructor(
    ipaddress: string,
    port: number,
    command: string,
    args: Array<string>,
    cwd: string
  ) {
    super();
    this.command = command;
    this.args = args;
    this.cwd = cwd;
    let sshConsole: CustomizedSSHClient;
    const consoleIdentifier = `${ipaddress}:${port}`;
    if (SSHConsole.sshSessions.has(consoleIdentifier)) {
      sshConsole = SSHConsole.sshSessions.get(consoleIdentifier);
      if (sshConsole.ready === false) {
        sshConsole.on("ready", () => {
          sshConsole.ready = true;
          this.setupShellStream(sshConsole);
        });
      } else {
        this.setupShellStream(sshConsole);
      }
    } else {
      sshConsole = new Client() as CustomizedSSHClient;
      sshConsole.ready = false;
      SSHConsole.sshSessions.set(consoleIdentifier, sshConsole);
      sshConsole.on("ready", () => {
        sshConsole.ready = true;
        this.setupShellStream(sshConsole);
      });
      sshConsole.on("error", (err) => {
        console.log("error!!!" + err);
        //sshConsole.end();
      });

      sshConsole.on("close", () => {
        console.log("SSH connection closed.");
      });
      console.log("Establishing SSH connection " + ipaddress + ":" + port);
      sshConsole
        .on("ready", function () {
          console.log("Client :: ready");
        })
        .connect({
          host: ipaddress,
          port,
          username: "p4",
          password: "p4",
          privateKey: process.env.SSH_PRIVAT_KEY_PATH
            ? fs.readFileSync(process.env.SSH_PRIVATE_KEY_PATH)
            : undefined,
          readyTimeout: 90000,
        });
    }
  }

  private async setupShellStream(sshConsole: CustomizedSSHClient) {
    sshConsole.shell((err: any, stream: any) => {
      //if (err) throw err;
      this.emit("ready");
      this.stream = stream;
      stream
        .on("close", () => {
          console.log("Stream :: close");
          sshConsole.end();
          this.emit("close");
        })
        .on("data", (data: any) => {
          this.emit("data", data);
        });
      stream.write("cd " + this.cwd + "\n");
      stream.write(this.command + " " + this.args.join(" ") + "\n");
    });
  }

  write(data: string): void {
    console.log(`${this.command}${this.args} writing: `, data);
    this.stream.write(data);
  }

  writeLine(data: string): void {
    console.log(`${this.command}${this.args}`, data);
    this.stream.write(`${data}\n`);
  }

  async close(): Promise<void> {
    this.emit("close");
  }
}

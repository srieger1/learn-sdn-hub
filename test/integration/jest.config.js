const mongoDB = require("@shelf/jest-mongodb/jest-preset");
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "..",
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  ...mongoDB,
};

const ncp = require("ncp").ncp;
const path = require("path");

ncp.limit = 16;

const source = path.join(__dirname, "src");
const destination = path.join(__dirname, "build");

ncp(
  source,
  destination,
  {
    filter: (filename) => {
      const isTsFile = filename.endsWith(".ts") || filename.endsWith(".tsx");
      return !isTsFile;
    },
  },
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Assets copied successfully!");
  }
);

const fs = require("fs");
const data = require("./econ-data");
const FILE_NAME = "datainfo.json";

writeFileSync(FILE_NAME, JSON.stringify(datainfo), "utf-8");

console.log("Done!");
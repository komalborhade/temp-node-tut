const { readFileSync, writeFileSync } = require("fs");
console.log("start");

// const fs = require('fs');
// fs.readFileSync()

const first = readFileSync("./content/first.txt", "utf8");
// const first = readFileSync('./content/first','utf8')    //error
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first,second);

writeFileSync(
  "./content/result=sync.txt",
  `Here is the result : ${first},${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next task");

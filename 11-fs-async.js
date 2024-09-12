const { readFile, writeFile } = require("fs");

console.log('start');


// we run callback when we're done with whatever functionality we're doing
// eg. addeventlistener on button

readFile("./content/first.txt", "utf8", (err, result) => {
  /* if we do not provide 'utf8' then we get <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 
    69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65> */
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log('done with this task');
        
      }
    );
  });
});
console.log('starting next task');

// https://adventofcode.com/2019/day/15
const fs = require("fs").promises;
const inputPath = "./input.txt";
// const inputPath = "./test-input.txt";

async function getInput() {
  const input = await fs.readFile(inputPath);
  return input.toString();
}

getInput()
  .then(res => {
    console.log(res);
    console.log("Merry Christmas! 🎄");
  })
  .catch(err => console.error(err));

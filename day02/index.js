// https://adventofcode.com/2019/day/2
const fs = require('fs').promises;
const inputPath = './input.txt';
// const inputPath = "./test-input.txt";

const intcodeComputer = require('./../modules/intcode-computer');

async function getInput() {
  const input = await fs.readFile(inputPath);
  return input.toString();
}

getInput()
  .then(res => {
    intcodeComputer(res);
  })
  .catch(err => console.error(err));

// https://adventofcode.com/2019/day/2
const fs = require('fs').promises;
const inputPath = './input.txt';
// const inputPath = "./test-input.txt";

async function getInput() {
  const input = await fs.readFile(inputPath);
  return input.toString();
}

getInput()
  .then(res => {
    const integersList = res.split(',').map(value => parseInt(value));
    // Opcodes are (groups of 4) indexes 0-3, 4-7, 8-11, etc.
    integersList.forEach((integer, index) => {
      const isPositionZero = index % 4 === 0;
      console.log(isPositionZero);
      if (isPositionZero) {
        // Position Zero - (1) Add, (2) Multiply, (99) End
        console.log(integer);
      }
    });
    // console.log(JSON.stringify(integersList, null, 2));
    console.log('Merry Christmas! 🎄');
  })
  .catch(err => console.error(err));

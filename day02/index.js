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
    let integersList = res.split(',').map(value => parseInt(value));
    // console.log(JSON.stringify(integersList, null, 2));
    // Restore gravity assist program
    integersList[1] = 12;
    integersList[2] = 2;
    let instructionPointer = 0;

    integersList.forEach((integer, index) => {
      const isPositionZero = index % 4 === 0;
      // console.log(isPositionZero);
      if (isPositionZero) {
        // Position Zero - (1) Add, (2) Multiply, (99) End
        console.log(integer);
        if (integer !== 99 && integer !== 0) {
          const indexInputOne = integersList[index + 1];
          const indexInputTwo = integersList[index + 2];
          const indexOutput = integersList[index + 3];
          let result = 0;
          console.log(indexInputOne, indexInputTwo, indexOutput);
          if (integer === 1) {
            result = integersList[indexInputOne] + integersList[indexInputTwo];
          } else if (integer === 2) {
            result = integersList[indexInputOne] * integersList[indexInputTwo];
          }
          integersList[indexOutput] = result;
          console.log(`Position zero value: ${integersList[0]}`);
          // console.log(JSON.stringify(integersList, null, 2));

          instructionPointer += 4;
          console.log(`instructionPointer: ${instructionPointer}`);
        }
      }
    });
    // console.log(JSON.stringify(integersList, null, 2));
    console.log(`Position zero value: ${integersList[0]}`);
    console.log('Merry Christmas! 🎄');
  })
  .catch(err => console.error(err));

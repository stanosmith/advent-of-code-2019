// https://adventofcode.com/2019/day/2
const fs = require('fs').promises;
const inputPath = "./input.txt";
// const inputPath = './test-input.txt';

async function getInput() {
  const input = await fs.readFile(inputPath);
  return input.toString();
}

getInput()
  .then(res => {
    // INFO: sum of absolute values of the horizontal and vertical distance
    //  e.g. int distance = Math.abs(x1-x0) + Math.abs(y1-y0);
    //
    // horizontal/x = r/l
    // vertical/y = u/d
    //
    const input = res.split('\n').map(wirePath => wirePath.split(','));
    console.log(JSON.stringify(input, null, 2));

    console.log('Merry Christmas! 🎄');
  })
  .catch(err => console.error(err));

// https://adventofcode.com/2019/day/1
const fs = require("fs").promises;
const inputPath = "./input.txt";
// const inputPath = "./test-input.txt";

async function getInput() {
  const input = await fs.readFile(inputPath);
  return input.toString();
  // return new Buffer(input);
}

getInput()
  .then(res => {
    const totalFuelRequired = res
      .split("\n")
      .map(mass => Math.floor(mass / 3) - 2)
      .reduce((totalFuel, fuelRequired) => {
        totalFuel = totalFuel + fuelRequired;
        return totalFuel;
      }, 0);
    console.log(`The total fuel required is ${totalFuelRequired}`);
    console.log("Merry Christmas! 🎄");
  })
  .catch(err => console.error(err));

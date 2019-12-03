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
    const moduleMasses = res.split("\n");
    const totalFuelRequired = moduleMasses
      .map(getFuelRequirement)
      .reduce((totalFuel, fuelRequired) => {
        totalFuel = totalFuel + fuelRequired;
        return totalFuel;
      }, 0);

    const totalFuelRequiredPartTwo = moduleMasses.map(mass => {
      const ogFuelReq = getFuelRequirement(mass);
      let nextFuelReq = getFuelRequirement(ogFuelReq);
      if (ogFuelReq > 0 && nextFuelReq > 0) {

      }
    });

    function getFuelRequirement(mass) {
      return Math.floor(mass / 3) - 2;
    }

    console.log(`The total fuel required is ${totalFuelRequired}`);
    console.log(`The total fuel required (part two) is ${totalFuelRequiredPartTwo}`);
    console.log("Merry Christmas! 🎄");
  })
  .catch(err => console.error(err));

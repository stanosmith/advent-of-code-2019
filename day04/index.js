// https://adventofcode.com/2019/day/4
// input: 128392-643281
const rangeStart = 128392;
const rangeEnd = 643281;

// 514889 numbers to check
console.log(`${rangeEnd - rangeStart} numbers to check`);

// TODO: Count from range start to range end
let totalPossiblePasswords = 0;
for (let i = rangeStart; i < rangeEnd; i++) {
  if (isPossibleNumber(i)) {
    totalPossiblePasswords++;
  }
}
console.log(`⭐️ totalPossiblePasswords: ${totalPossiblePasswords}`);

// Test values
// const testNumber1 = 111111;
// const testNumber2 = 223450;
// const testNumber3 = 123789;
// console.log(`111111 should be true: ${isPossibleNumber(testNumber1)}`);
// console.log(`223450 should be false: ${isPossibleNumber(testNumber2)}`);
// console.log(`123789 should be false: ${isPossibleNumber(testNumber3)}`);

function isPossibleNumber(number) {
  return (
    // It is a six-digit number.
    hasSixDigits(number) &&
    // TODO: The value is within the range given in your puzzle input.
    // valueWithinRange(number) &&
    // TODO: Two adjacent digits are the same (like 22 in 122345).
    twoDigitsAreAdjacent(number) &&
    // TODO: Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
    digitsNeverDecrease(number)
  );
}

function valueWithinRange(number) {
  return number >= rangeStart && number <= rangeEnd;
}

function digitsNeverDecrease(number) {
  return (
    String(number)
      .split('')
      .filter((number, index, numbers) => {
        return number > numbers[index + 1];
      }).length === 0
  );
}

function twoDigitsAreAdjacent(number) {
  const numbers = String(number).split('');

  for (let i = 0; i < numbers.length; i++) {
    const numCurrent = numbers[i];
    const numNext = numbers[i + 1];
    if (numCurrent === numNext) {
      return true;
    }
  }
  return false;
}

function hasSixDigits(number) {
  return String(number).length === 6;
}

console.log('Merry Christmas! 🎄');

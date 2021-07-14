// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  const arrayWithPositiveNum = input.filter(value => value > 0);
  const countofarrayWithPositiveNum = arrayWithPositiveNum.length;
  const arraySumOfNegativeNum = input.filter(value => value < 0);
  const sumOfarraySumOfNegativeNum = arraySumOfNegativeNum.reduce(function (
    acc,
    cur
  ) {
    return acc + cur;
  },
  0);
  return [countofarrayWithPositiveNum, sumOfarraySumOfNegativeNum];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));



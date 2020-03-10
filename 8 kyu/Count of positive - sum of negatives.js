// Count of positives / sum of negatives

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

FUNDAMENTALS   ARRAYS   LISTS   DATA STRUCTURES   ARITHMETICMA   THEMATICS   ALGORITHMS   NUMBERS
 */

function countPositivesSumNegatives(input) {
  let out = [];
  let sP = 0;
  let sN = 0; console.log(input);
  if (!input) return out;
  if (input.length > 0) {
    input.map(el => (el > 0) ? sP +=1 : sN +=el);
    out.push(sP); out.push(sN);
  };
  return out;
}
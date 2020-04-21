// Difference of 2

/*
The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

The result should be sorted in ascending order.

The input will consist of unique values. The order of the integers in the input collection should not matter.

Examples

[1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
[4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
[1, 23, 3, 4, 7]  -->  [[1, 3]]
[4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]
ALGORITHMS   ARRAYS   SORTING   LOOPS   CONTROL FLOW   BASIC LANGUAGE FEATURES   FUNDAMENTALS   UTILITIES
 */

function twosDifference(input){
  const out = [];
  input = input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
      if (Math.abs(input[i] - input[j]) === 2) out.push([input[i], input[j]]);
    }
  }
  return out;
}
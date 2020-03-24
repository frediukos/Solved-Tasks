// Math engine

/*
Given an array of integers.

Return a number that is the sum of

The product of all the non-negative numbers
The sum of all the negative numbers
Edge cases
If there are no non-negative numbers, assume the product of them to be 1.
Similarly, if there are no negative numbers, assume the sum of them to be 0.
If the array is null, result should be 0.
For example:
mathEngine([1, 2, 3, -4, -5]) should return -3

FUNDAMENTALS
 */

function mathEngine(arr) {
  console.log(arr);
  if (arr === null) return 0;
  let pos = 1;
  let neg = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? neg +=arr[i] : pos *=arr[i];
  }
  return pos + neg;
}
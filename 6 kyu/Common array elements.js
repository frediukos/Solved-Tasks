// Common array elements

/*
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Array lengths in random tests run from 5000 to 10000 elements.

More examples in the test cases.

Good luck!

ALGORITHMS   ARRAYS   PERFORMANCE
 */

function common(a,b,c) {
  let sum = 0;
  let arrA = {};
  let arrB = {};
  let arrC = {};
  a.map(el => arrA[el] ? arrA[el]++ : arrA[el] = 1);
  b.map(el => arrB[el] ? arrB[el]++ : arrB[el] = 1);
  c.map(el => arrC[el] ? arrC[el]++ : arrC[el] = 1);
  for (let key in arrA) {
    if (arrA[key] && arrB[key] && arrC[key]) {
      let num = Math.min(arrA[key], arrB[key], arrC[key]);
      sum +=num * +key;
    }
  }
  return sum;
}
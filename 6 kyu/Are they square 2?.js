// Are they square 2?

/*
Another Kata testing an whether all elements of an array are square, although this time the array can be
a multidemtional array with any number of dimensions.

Your task - Write a function that checks whether all elements in a multidimensional array are square numbers.
The function should be able to take any number of array elements and any number of dimensions.

Your function should return true if all elements are square numbers and false if not.

An entirely empty array should return undefined.

You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16, 25, 36]);
//returns true

isSquare([1, 2, 3, 4, 5, 6]);
//returns false

isSquare([1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]]);
//returns true
FUNDAMENTALS   ARRAYS

 */

var isSquare = function(arr) {
  if (arr.length === 0) return undefined;
  let out = [];
  for (let i in arr) {
    if (Array.isArray(arr[i])) { out.push(arr[i]+''); }
    else out.push(arr[i]);
  }
  out = (out+'').split(',');
  return out.every(el =>  el ** 0.5 % 1 === 0);
}

// or

const isSquare = arr => {
  return arr.length ? arr.every(el => {
    if (Array.isArray(el)) return el.length ? isSquare(el) : true;
    return Number.isInteger(Math.sqrt(el));
  }) : undefined;
};
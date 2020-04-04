// Are they square?

/*
Write a function that checks whether all elements in an array are square numbers.
The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined. You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]);
//returns true

isSquare([3, 4, 7, 9]);
//returns false

isSquare([]);
//returns undefined
FUNDAMENTALS   ARRAYS
 */

var isSquare = function(arr){
  if (arr.length === 0) return undefined;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] ** 0.5).toString().length > arr[i].toString().length)
      return false;
  }
  return true;
}

// or

var isSquare = function(arr){
  return arr.length ? arr.every(el => el ** 0.5 % 1 === 0) : undefined;
}


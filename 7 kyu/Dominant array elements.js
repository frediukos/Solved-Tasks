// Dominant array elements

/*
An element in an array is dominant if it is greater than all elements to its right.
You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.
More examples in the test cases.

Good luck!

FUNDAMENTALS   ARRAYS
 */

function solve(arr) {
  let out = [];
  arr = arr.filter((el, i) => arr.lastIndexOf(el) === i);
  while (arr.length) {
    let max = Math.max(...arr);
    out.push(max);
    if (arr.indexOf(max)+1 !== arr.length) {
      arr = arr.slice(arr.indexOf(max)+1);
    } else return out;
  }
};

// or shorter

function solve(arr){
  return arr.filter((el, i) => arr.slice(i + 1).every(x => x < el));
};
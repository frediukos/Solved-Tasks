// Sum The Array

/*
Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

For example:

var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85
Good luck!
FUNDAMENTALS   ARRAYS
 */

Array.prototype.sum = function() {
  return this.length === 0 ? 0 : this.reduce((a, b) => a + b);
}
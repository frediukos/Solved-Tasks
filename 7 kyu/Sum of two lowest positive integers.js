// Sum of two lowest positive integers

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

FUNDAMENTALS   ARRAYS
 */

function sumTwoSmallestNumbers(num) {
  let sum = 0;
  let min;
  for (let i = 1; i <=2; i++){
    min = Math.min(...num);
    if (Number.isInteger(min)) {
      sum +=min;
      num.splice(num.indexOf(min),1);
    } else {
      num.splice(num.indexOf(min),1);
      i = i - 1;
    }
  }
  return sum;
}

// short version

function sumTwoSmallestNumbers(num) {
  num.sort((a, b) => a - b);
  return num[0] + num[1];
}
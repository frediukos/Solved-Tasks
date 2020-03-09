// Sum of Odd Cubed Numbers

/*
Find the sum of the odd numbers within an array, after cubing the initial integers.
The function should return undefined/None/nil/NULL if any of the values aren't numbers.
 */

function cubeOdd(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      return undefined;
    } else if (arr[i] % 2 !== 0) {
      s +=arr[i] ** 3;}
  }
  return s;
}
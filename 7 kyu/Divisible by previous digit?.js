// Divisible by previous digit?

/*
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]
* Remember 0 is evenly divisible by all integers but not the other way around *

ALGORITHMS   SEQUENCES   ARRAYS   NUMBERS
 */

function divisibleByLast(n) {
  let arr = (n+'').split('').map(el => el * 1); console.log(arr);
  let out = [false];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % arr[i-1] === 0) { out.push(true); }
    else { out.push(false); }
  }
  return  out;
}
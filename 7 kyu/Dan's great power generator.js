// Dan's great power generator

/*
Dan likes to find the nth power of number. But he doesn't like it when the result is odd!

Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

Eg. if number = 7, and power = 2, result = 50.
FUNDAMENTALS
 */

function danspower(num, power) {
  let res = Math.pow(num, power);
  if (res % 2 === 0) { return res; }
  else if (res % 10 >= 5) {
    while (res % 10 !== 0) {
      res++;
    }
  } else {
    while (res % 10 !== 0) {
      res--;
    }
  }
  return res;
}

// or shorter solution

function danspower(num, power) {
  let res = Math.pow(num, power);
  return res % 2 === 0 ? res : Math.round(res / 10) * 10;
}
// Simple Fun #258: Is Divisible By 6

/*
Task
A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number s, find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

Input/Output
[input] string s

A masked number.

1 ≤ inputString.length ≤ 10000.

[output] a string array

Sorted array of strings representing all non-negative integers that correspond to the given mask and are divisible by 6.

Example
For s = "1*0", the output should be ["120", "150", "180"].

For s = "*1", the output should be [].

For s = "1234567890123456789012345678*0",

the output should be

[
"123456789012345678901234567800",
"123456789012345678901234567830",
"123456789012345678901234567860",
"123456789012345678901234567890"]```
As you can see, the masked number may be very large ;-)
 */

function isDivisibleBy6(s) {
  let num = 0;
  let out = [];
  for (let i = 0; i < 10; i++) {
    num = s.valueOf().replace('*', i);
    if (num.split('').map(el => +el).reduce((a, b) => a+b) % 3 === 0 && num[num.length-1] % 2 === 0)
      out.push(num);
  }
  return out;
}
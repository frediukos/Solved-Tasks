// Alternate capitalization

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
FUNDAMENTALS   STRINGS
 */

function capitalize(s) {
  let str1 = '';
  let str2 = '';
  s.split('').map((el, i) => {
    if (i % 2 === 0) {
      str1 +=el.toUpperCase();
      str2 +=el;
    } else {
      str2 +=el.toUpperCase();
      str1 +=el;
    }
  });
  return [str1, str2];
}
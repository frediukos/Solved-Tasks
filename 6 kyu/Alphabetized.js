// Alphabetized

/*
The alphabetized kata

Re-order the characters of a string, so that they are concatenated into a new string
in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
Inspired by Tauba Auerbach
PUZZLES   STRINGS   SORTING   ALGORITHMS
 */

function alphabetized(s) {
  let str = s.replace(/\W/g, ''); // this "replace" is not necessary
  let sort = '';
  for (var j = 97; j <= 122; j++) {
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase().charCodeAt() === j) sort +=str[i];
    }
  }
  return sort;
}
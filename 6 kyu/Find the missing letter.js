// Find the missing letter

/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
ALGORITHMS   MATHEMATICS   NUMBERS
 */

function findMissingLetter(arr) {
  let dict = 'abcdefghijklmnopqrstuvwxyz'.split('');
  if (arr[0].charCodeAt(0) < 97) {
    dict = dict.map(el => el.toUpperCase());
  }
  let startPos = dict.indexOf(arr[0]);
  let newDict = dict.slice(startPos, startPos+arr.length+1);
  for (let i = 0; i < newDict.length; i++) {
    if (newDict[i] !== arr[i]) return newDict[i];
  }
}
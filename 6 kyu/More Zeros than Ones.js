// More Zeros than Ones

/*
Create a moreZeros function which will receive a string for input, and return an array containing only the characters
from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are
 in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
FUNDAMENTALS
 */

function moreZeros(s){
  let one = 0;
  let zero = 0;
  let work = [];
  s.split('')
    .filter((el, i) => i === s.indexOf(el))
    .map(el => el = (el.charCodeAt()).toString(2))
    .map(el => {
      zero = 0;
      one = 0;
      el.split('').map(elm => elm === '1' ? one++ : zero++);
      if (zero > one) work.push(String.fromCharCode(parseInt(el, 2)));
    });
  return work;
}
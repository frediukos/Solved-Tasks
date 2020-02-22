// Two to One

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
FUNDAMENTALS
 */

function longest(s1, s2) {
  let arr = s1.concat(s2).split('');
  return arr.filter((el, i) => i === arr.indexOf(el)).sort().join('')
}
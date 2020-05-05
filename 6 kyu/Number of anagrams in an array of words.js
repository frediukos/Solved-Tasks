// Number of anagrams in an array of words

/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters.
An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
ALGORITHMS
 */

function anagramCounter(wArr) {
  let count = 0;
  for (let i = 0; i < wArr.length - 1; i++) {
    for (let j = i + 1; j < wArr.length; j++) {
      if (wArr[i].split('').sort().join('') === wArr[j].split('').sort().join('')) {
        count++;
      }
    }
  }
  return count;
}
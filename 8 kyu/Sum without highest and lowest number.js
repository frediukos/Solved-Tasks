// Sum without highest and lowest number

/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

FUNDAMENTALS   BASIC LANGUAGE FEATURES
 */

function sumArray(arr) {
  if (arr == null || arr.length <= 1) {
    return 0} else {
    let min = Math.min(...arr); console.log(min + ' ');
    let max = Math.max(...arr);console.log(max + ' ');
    arr.splice(arr.indexOf(min), 1);
    arr.splice(arr.indexOf(max), 1);console.log('arr without min&max '+arr);
    return arr.reduce((s, el) => s +=el, 0);
  }
}
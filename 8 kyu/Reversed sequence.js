// Reversed sequence

/*
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]

FUNDAMENTALS
 */

const reverseSeq = n => {
  console.log(n);
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}
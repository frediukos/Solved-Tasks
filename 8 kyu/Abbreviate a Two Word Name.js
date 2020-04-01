// Abbreviate a Two Word Name

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

FUNDAMENTALS   STRINGS   ARRAYS
 */

function abbrevName(name){
  let i = 0;
  while (name[i] !== ' ') {
    i++;
  }
  return (name[0] + '.' + name[i+1]).toUpperCase();
}
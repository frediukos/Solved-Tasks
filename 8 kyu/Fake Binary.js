// Fake Binary

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
Return the resulting string.
FUNDAMENTALS   STRINGS   ARRAYS
 */

function fakeBin(x){
  let out = x.replace(/[1-4]/g, '0');
  return out.replace(/[5-9]/g, '1');
}
// Check three and two

/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
FUNDAMENTALS  ARRAYS
 */

function checkThreeAndTwo(arr) {
    let a = 0; let b = 0; let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a") { a +=1; }
        else if (arr[i] === 'b') { b +=1; }
             else c +=1;
    }
    if (a === 3 && (b === 2 || c === 2)) return true
    else if (b === 3 && (a === 2 || c === 2)) return true
         else if (c === 3 && (a === 2 || b === 2)) return true
              else return false;
}
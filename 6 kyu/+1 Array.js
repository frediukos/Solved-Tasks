// +1 Array

/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples

For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
 */

function upArray(arr){
    console.log(arr);
    if (arr.length === 0 || !Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9 || typeof arr[i] !== 'number') return null;
    }
    let cut = [];
    for (let i = 0; i < arr.length; i +=15) {
        cut.push(arr.slice(i,i+15));
    }
    cut[cut.length-1] = cut[cut.length-1].join('') * 1 + 1;
    cut = cut.map(el => Array.isArray(el) ? el.join('') * 1 : el);
    return cut.join('').split('').map(el => el * 1);
}
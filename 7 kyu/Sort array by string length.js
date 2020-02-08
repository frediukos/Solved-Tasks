// Sort array by string length

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

FUNDAMENTALS  SORTINGAL  GORITHMS  ARRAYS
 */

function sortByLength (arr) {
    let out = [];
    let iter = arr.length;
    for (let i = 0; i < iter; i++) {
        let min = arr[0];
        for (let j = 1; j < arr.length; j++) {
            if (arr[j].length < min.length) min = arr[j];
        }
        arr = arr.filter(el => el !== min);
        out.push(min);
    }
    return out;
};

// or short

function sortByLength (arr) {
    return arr.sort((a, b) => a.length - b.length);
};
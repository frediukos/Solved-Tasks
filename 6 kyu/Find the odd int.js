// Find the odd int

/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

FUNDAMENTALS
 */

function findOdd(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        if (!obj[A[i]]) obj[A[i]] = 1;
        else delete obj[A[i]];
    }
    for (let key in obj) {
        return +key;
    }
}
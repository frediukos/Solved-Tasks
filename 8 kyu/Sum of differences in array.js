// Sum of differences in array

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
FUNDAMENTALSARRAYS
 */

function sumOfDifferences(arr) {
    const newArr = arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < newArr.length - 1; i++){
        sum += newArr[i] - newArr[i + 1];
    }
    return sum;
}
// Smallest Difference

/*
Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.

Note: Try to solve this without brute force.

Example:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]

  Output = 1

Example empty array:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = []

  Output = 1

Example two empty arrays:

  arr1 = []
  arr2 = []

  Output = -1
FUNDAMENTALS  ARRAYS  ALGORITHMS
 */

function smallestDiff(arr1, arr2) {
    let min; let tmp = [];
    if (arr1.length === 0 && arr2.length === 0) return -1;
    if (arr1.length === 0 || arr2.length === 0) {
        if (arr1.length === 0) {
            tmp = arr2.sort((a, b) => a - b);
            return tmp[0];
        } else {
            tmp = arr1.sort((a, b) => a - b);
            return tmp[0];
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            tmp.push(Math.abs(arr1[i] - arr2[j]));
        }
    }
    tmp = tmp.sort((a, b) => a - b);
    return tmp[0];
}
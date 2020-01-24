// Sum Mixed Array

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

 */

function sumMix(x){
    return x
        .map(el => typeof el === 'string' ? el *=1 : el)
        .reduce((a, b) => a + b)
}
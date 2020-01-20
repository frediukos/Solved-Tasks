// String average

/*
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

ALGORITHM SSTRINGS NUMBERS
 */

function averageString(str) {
    let sum = 0;
    let cond = 0;
    let num = ['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr = str.split(' ');
    for (let k = 0; k < arr.length; k++){
        if (num.includes(arr[k])) cond++
    }
    if (str !== '' && cond === arr.length){
        for (let i = 0; i < arr.length; i++)
            for(let j = 0; j < num.length; j++){
                if (arr[i] === num[j]) sum = sum + j;
            }
        sum =  Math.trunc(sum/arr.length);
        return num[sum];
    } return 'n/a';
}
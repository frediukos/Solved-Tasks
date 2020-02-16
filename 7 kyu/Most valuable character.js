// Most valuable character

/*
In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
More examples in test cases. Good luck!
FUNDAMENTALS
 */

function solve(st) {
    array = st.split("");
    let res = ["", 0];

    let counter = 0;
    for(let i = 0; i < array.length; i++ ){
        counter = array.lastIndexOf(array[i])- array.indexOf(array[i]);
        if (array.lastIndexOf(array[i]) === array.indexOf(array[i])) counter = 1;
        if(counter > res[1]) {
            res[1] = counter;
            res[0] = array[i];
        } else if (counter === res[1] && array[i] < res[0]) {
            res[0] = array[i];
        }
    }
    return res[0];
}
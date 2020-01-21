// Convert a string to an array

/*
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */

function stringToArray(string) {
    let j = 0; let i = 0;
    let arr = [];
    for (i =0; i < string.length; ) {
        if (string.indexOf(' ', i) >= 0) {
            j = string.indexOf(' ', i);
            arr.push(string.slice(i, j));
            i = j+1;
        }
        else {
            arr.push(string.slice(i, string.length));
            break;
        }
    }
    return arr;
}
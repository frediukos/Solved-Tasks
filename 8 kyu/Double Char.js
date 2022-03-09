// Double Char

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
FUNDAMENTALS LOOPS CONTROL FLOW  BASIC LANGUAGE FEATURES
 */

function doubleChar(str) {
    newStr = [];
    for (let i = 0; i < str.length; i++){
        newStr += str[i].repeat(2);
    }
    return newStr;
}


function doubleChar(str) {
    return str.split('').map(el => el+el).join('');
}
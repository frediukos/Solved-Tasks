// Valid Parentheses

/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= input.length <= 100
ALGORITHMS  VALIDATION  UTILITIES
 */

function validParentheses(parens){
    if (parens === '') return true;
    let arr = [parens];
    for (let i = 0; i < parens.length; i++) {
        if (arr[0] !== '') arr[0] = arr[0].replace('()', '');
    }
    return arr[0] === '';
}
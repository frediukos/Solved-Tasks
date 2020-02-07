// String incrementer

/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
FUNDAMENTALS REGULAR  EXPRESSIONS
 */

function incrementString (str) {
    let zero = '';
    let txtNum = str.replace(/[a-z]/ig, '');
    let out = +txtNum + 1;
    let len = (txtNum+'').length - (out+'').length;
    if (len > 0) {
        for (let i = 1; i <= len; i++) {
            zero += '0';
        }
    }
    return str.replace(/[0-9]/g, '') + zero + out;
}
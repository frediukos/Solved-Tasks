// Help Bob count letters and digits

/*
Bob is a lazy man.

He needs you to create a method that can determine how many letters and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

FUNDAMENTALS  STRINGS
 */

function countLettersAndDigits(input) {
    return input.split``.filter(el => /[0-9a-zA-Z]/.test(el)).length;
}
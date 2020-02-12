// Convert string to camel case

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
ALGORITHMS   REGULAR EXPRESSIONS   DECLARATIVE PROGRAMMING   ADVANCED LANGUAGE FEATURES   FUNDAMENTALS   STRINGS
 */

function toCamelCase(str){
    if (str.length === 0) return '';
    let out;
    if (str.includes('-')) {
        out = str.split('-').map(el => (el[0].toUpperCase()) + el.slice(1)).join('');
    } else if (str.includes('_')) {
        out = str.split('_').map(el => (el[0].toUpperCase()) + el.slice(1)).join('');
    }
    return str[0] + out.slice(1);
}
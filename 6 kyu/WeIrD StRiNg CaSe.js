// WeIrD StRiNg CaSe

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

let toWeirdCase = string => {
    let tmp = [];
    let out = string.split(' ');
    for (let i = 0; i < out.length; i++){
        tmp = out.splice(i, 1);
        tmp = tmp[0].split('');
        tmp.forEach((s, j) => j % 2 ? tmp[j] = s.toLowerCase() : tmp[j] = s.toUpperCase());
        out.splice(i, 0, tmp.join(''));
    }
    return out.join(' ');
}
// Remove duplicate words

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

ALGORITHMS   STRINGS   REGULAR EXPRESSIONS   DECLARATIVE PROGRAMMING   ADVANCED LANGUAGE   FEATURES FUNDAMENTALS
 */

function removeDuplicateWords(s) {
    return s.split(' ').filter((el, i, arr) => i === arr.indexOf(el)).join(' ');
}

//or

function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ');
}
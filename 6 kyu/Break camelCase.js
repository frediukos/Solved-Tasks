// Break camelCase

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'

FUNDAMENTALS STRINGS FORMATTING ALGORITHMS
 */

function solution(str) {
    return str
        .replace(/\d/g, '')
        .replace(/([A-Z])/g, ' $1')
}
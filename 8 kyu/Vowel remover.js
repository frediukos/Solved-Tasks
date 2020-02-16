// Vowel remover

/*
Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples

shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
FUNDAMENTALS   STRINGS   PARSING   ALGORITHMS
 */

function shortcut(str){ console.log(str);
    return str.replace(/[aoeiu]/g, '');
}
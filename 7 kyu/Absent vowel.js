// Absent vowel

/*
Your job is to figure out the index of which vowel is missing from a given string.

A has an index of 0,

E has an index of 1,

I has an index of 2,

O has an index of 3,

U has an index of 4.

Example: "John Doe hs 7 red pples under his bsket" => 0;

Example: "Bb Smith sent us six neatly arranged range bicycles" => 3;

There is no need for string validation and every sentence given will contain all vowles but one. (Also, you won't need to worry about capitals)
 */

function absentVowel(x){
    const char = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    char.filter((el, i) => x.includes(el) ? num *=1 : num = i);
    return num;
}
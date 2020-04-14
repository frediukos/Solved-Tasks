// Find the position!

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta

FUNDAMENTALS
 */

function position(leter){
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alph.indexOf(leter) + 1}`;
}
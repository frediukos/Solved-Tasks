// Remove First and Last Character Part Two

/*
This is a spin off of my first kata. You are given a list of character sequences as a comma separated string.
Write a function which returns another string containing all the character sequences except the first and the last ones.
If the input string is empty, or the removal of the first and last items would cause the string to be empty,
return a null value.

FUNDAMENTALS   BASIC LANGUAGE FEATURES   ARRAYS   STRINGS
 */

const array = arr =>
  arr
    .split(',')
    .slice(1, -1)
    .join(' ') || null;

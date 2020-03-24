// String transformer

/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

FUNDAMENTALS
 */

function stringTransformer(str) {
  let out = [];
  str.split(' ')
    .reverse()
    .map(el => {
      el = el.split('').map(elm => elm === elm.toLowerCase() ? elm.toUpperCase() : elm.toLowerCase())
        .join('');
      out.push(el);
    });
  return out.join(' ');
}

//or

function stringTransformer(str) {
  return str.split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(elm => elm === elm.toLowerCase() ? elm.toUpperCase() : elm.toLowerCase())
    .join('');
}
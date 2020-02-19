// Case swapping

/*
Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS

Examples

""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"
FUNDAMENTALS
 */

function swap(str){
  return str.split('').map(el => el.charCodeAt(0) < 91 ? el.toLowerCase() : el.toUpperCase()).join('')
}
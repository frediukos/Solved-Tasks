// Order of weight

/*
Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.
FUNDAMENTALS   STRINGS   ARRAYS
 */

function arrange(arr){
  let arrG = arr
    .filter(el => el.includes('G') && !el.includes('KG'))
    .map(el => el.slice(0, -1))
    .sort((a, b) => a - b)
    .map(el => el + 'G');
  let arrKg = arr
    .filter(el => el.includes('KG'))
    .map(el => el.slice(0, -2))
    .sort((a, b) => a - b)
    .map(el => el + 'KG');
  let arrT = arr
    .filter(el => el.includes('T'))
    .map(el => el.slice(0, -1))
    .sort((a, b) => a - b)
    .map(el => el + 'T');
  return arrG.concat(arrKg, arrT);
}
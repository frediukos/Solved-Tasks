// Frugal Pizza

/*
You love pizza, but you also love getting bang for your buck. One thing that irks you when you go to your
local pizza place is that although they list the diameter and price of each pizza, they don't list the cost
per square inch. (Unbelievable, I know!)

Write a function that takes two arguments - diameter, in inches, and price - and returns the price per square
inch to two decimal places. (as a number, not a string)
 */

function pizzaPrice(d, price) {
  return d === undefined || price === undefined || typeof d !== 'number'
    ? 0
    : +(price / (Math.PI * Math.pow(d/2, 2))).toFixed(2);
}
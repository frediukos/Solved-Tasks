# Solved-Tasks
#### Sum of the first nth term of Series
```javascript
function SeriesSum(n) {
  let sum = 1; 
  let del = 1;
  if (n === 0) return '0.00';
  for (i = 2; i <= n; i++){
    del = del  + 3;
    sum += 1 / del;
  }
  return sum.toFixed(2) + '';
}
```
Filter the number
isReallyNaN
Is integer safe to use?
Return Negative
Invert values
Closest elevator
To square(root) or not to square(root)
Alan Partridge II - Apple Turnover
Squares sequence
Square Every Digit
Find the next perfect square!
Power of two
Powers of 3
Keep Hydrated!
Holiday VIII - Duty Free
How many times should I go?
Return the closest number multiple of 10
Formatting decimal places #1
Lario and Muigi Pipe Problem
Convert a Number to a String!
Number toString
Calculate Price Excluding VAT
Powers of 2
Convert number to reversed array of digits
Filling an array (part 1)
Parse nice int from char problem
Hex to Decimal
Bin to Decimal
parseFloat(s)
Count the Monkeys!
Filling an array (part 1)
Sum Arrays
What is type of variable?
Is every value in the array an array?
Enumerable Magic #3 - Does My List Include This?
Counting sheep...
A Needle in the Haystack
Be Concise IV - Index of an element in an array
To square(root) or not to square(root)
Difference of Volumes of Cuboids
Total amount of points
Square(n) Sum
How good are you really?
Sum of positive
Count of positives / sum of negatives
Calculate average
Sum of Odd Cubed Numbers
Odd or Even?
Find the smallest integer in the array



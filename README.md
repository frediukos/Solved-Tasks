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

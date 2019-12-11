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

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
Lario and Muigi Pipe Problem
Sum without highest and lowest number
Find Maximum and Minimum Values of a List
Sum of two lowest positive integers
Remove the minimum
Find the divisors!
Count by X
Unfinished Loop - Bug Fixing #1
Generate range of integers
Powers of 2
To square(root) or not to square(root)
Reversed sequence
Training JS #4: Basic data types--Array
Enumerable Magic #3 - Does My List Include This?
No Loops 2 - You only need one
You only need one - Beginner
Remove the minimum
A Needle in the Haystack
Be Concise IV - Index of an element in an array
A wolf in sheep's clothing
JavaScript Array Filter
Find numbers which are divisible by given number
Removing Elements
filterEvenLengthWord
Find how many times did a team from a given country win the Champions League?
Array.diff
Find Duplicates
Train to remove duplicates from an array with filter()
Convert number to reversed array of digits
My head is at the wrong end!
A wolf in sheep's clothing
Two Oldest Ages
Sum of two lowest positive integers
Find Maximum and Minimum Values of a List
Sum of differences in array
Sentence Smash
Printing Array elements with Comma delimiters
String Templates - Bug Fixing #5
CSV representation of arrayEnumerable Magic #1 - True for All?
Sum Arrays
Grasshopper - Array Mean
SpeedCode #2 - Array Madness
Beginner - Reduce but Grow
Array plus array
Convert number to reversed array of digits
Beginner - Lost Without a Map
Invert values
Remove First and Last Character Part Two
Jenny's secret message
Template Strings
Returning Strings
String Templates - Bug Fixing #5
If you can't sleep, just count sheep!!
Parse nice int from char problem
get character from ASCII Value
Regex validate PIN code
Determine offspring sex based on genes XX and XY chromosomes
Is this my tail?
Abbreviate a Two Word Name
Numbers to Letters
5 without numbers !!
Regex count lowercase letters
Double Char
Remove First and Last Character
Remove String Spaces
Spacify



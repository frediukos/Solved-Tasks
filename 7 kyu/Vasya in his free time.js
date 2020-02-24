// Vasya in his free time

/*
Vasya has a very limited amount of free time. During these precision minutes he likes to think about strings containing zeros and ones.

Vasya considers the following operation: he chooses any two adjacent positions in the string, and if one of them contains 0, and the other contains 1, then we are allowed to remove these two digits from the string.

Now Vasya thinks of what is the minimum length of the string that can remain after applying the described operation several times (possibly, zero)? Help him to calculate this number.

###Input First line of the input contains a single integer n, (1 ≤ n ≤ 500000), the length of the string Vasya has. The second line contains the string of length n consisting only from zeros and ones.

###Output Output the minimum length of the string that may remain after applying the described operations several times.

###Examples:

Task.ResultString(4, "1100") // answer is 0 =>  sequence of the possible steps: 1100 --> 10 --> empty string

Task.ResultString(5, "01010") // answer is 1 =>  sequence of the possible steps: 01010 --> 010 --> 0

Task.ResultString(8, "11101111") // answer is 6 =>  sequence of the possible steps: 11101111 --> 111111
PUZZLES   MATHEMATICS   ALGORITHMS   NUMBERS   GAMES   FUNDAMENTALS
 */

// optimized code

function CalculateString(n, nums) {
  nums = nums.replace(/01|10/g, '');
  return nums.length === n ? n : CalculateString(nums.length, nums);
}



// long version - inefficient algorithms

function CalculateString(n, nums) {
  if (n === 1) return 1;
  let arr = nums.split('');
  let i = 0;
  do {
    if (arr[i]+arr[i+1] === '01') {
      arr = arr.join('').replace('01', '').split('');
      i = 0;
    } else if (arr[i]+arr[i+1] === '10') {
        arr = arr.join('').replace('10', '').split('');
        i = 0;
      } else i++;
  } while (i < arr.length);
  return arr.length;
}
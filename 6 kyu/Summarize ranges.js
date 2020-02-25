// Summarize ranges

/*
Given a sorted array of numbers, return the summary of its ranges.

Examples

summaryRanges([1, 2, 3, 4]) === ["1->4"]
summaryRanges([1, 1, 1, 1, 1]) === ["1"]
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7", "9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
ALGORITHMS   ARRAYS
 */

function summaryRanges(nums) {
  let out = []; let tmp = [nums[0]];
  if (nums.length === 0) return out;
  nums.map((el, i) => {
    if (el === nums[i + 1] || nums[i + 1] === el + 1) {
      tmp.push(el);
    } else {
      tmp.push(el);
      tmp[0] === tmp[tmp.length - 1]
        ? out.push(tmp[0]+'')
        : out.push(`${tmp[0]}->${tmp[tmp.length - 1]}`);
      tmp = [nums[i + 1]];
    }
  });
  return out;
}
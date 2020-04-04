// Coding 3min : Symmetric Sort

/*
Coding 3min: Symmetric Sort

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

#Task:

Give you a number ```array```(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...
#Example:

```
example1:                        example2:

array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

after sort, should return:       after sort, should return:

      [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]
```
See more example at the testcases.
 */

function sc(arr) {
  let arr1 = []; let arr2 = [];
  arr = arr.sort((a, b) => a-b);
  arr.map((el, i) => i % 2 === 0 ? arr2.push(el) : arr1.push(el));
  return arr2.concat(arr1.reverse());
}
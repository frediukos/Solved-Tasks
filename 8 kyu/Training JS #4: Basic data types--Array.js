// Training JS #4: Basic data types--Array

/*
#Task
I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.
    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
 */

function getLength(arr){
  return arr.length; //return length of arr
}
function getFirst(arr){
  return arr[0]; //return the first element of arr
}
function getLast(arr){
  return arr[arr.length - 1]; //return the last element of arr
}
function pushElement(arr){
  var el=1;
  arr.push(el);//push el to arr
  return arr;
}
function popElement(arr){
  arr.pop(); //pop an element from arr
  return arr;
}
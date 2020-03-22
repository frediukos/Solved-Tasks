// Get array elements with specified keys

/*
Create a function that lets people easily grab only the array elements with given keys.

For example:

var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']
Note: The order of the elements should be preserved in the resulting array.

FUNDAMENTALS   ARRAYS   PROTOTYPES
 */

Array.prototype.only = function(keys)  {
  let out = [];
  keys = keys.sort((a, b) => a-b);
  for (let i = 0; i < keys.length; i++) {
    out.push(this[keys[i]]);
  }
  return out;
};
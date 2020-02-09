// Build Tower

/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
Go challenge Build Tower Advanced once you have finished this :)

FUNDAMENTALS   STRINGS   BASIC LANGUAGE FEATURES
 */

function towerBuilder(nFloor) {
    let out = [];
    let star;
    for (let i = 0; i < nFloor; i++) {
        star = i * 2 + 1;
        out.push(' '.repeat(nFloor - i - 1) + '*'.repeat(star) + ' '.repeat(nFloor - i - 1));
    }
    return out;
}
// Parts of a list

/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

or

a = {"az", "toto", "picaro", "zone", "kiwi"} -->

{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

You can see other examples for each language in "Your test cases"

FUNDAMENTALS
 */

function partlist(arr) {
  const out = [];
  for (let i = 0; i < arr.length-1; i++) {
    const tmp = [];
    let j = 0;
    tmp[j] = arr.slice(0, i+1).join(' ');
    tmp[j+1] = arr.slice(i + 1).join(' ');
    out[i] = tmp;
  }
  return out;
}

// or

function partlist(arr) {
  return arr.map((v,i)=>[arr.slice(0,i+1).join(' '),arr.slice(i+1).join(' ')]).splice(0, arr.length - 1);
}
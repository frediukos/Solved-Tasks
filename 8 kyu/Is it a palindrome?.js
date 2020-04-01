// Is it a palindrome?

/*
Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
FUNDAMENTALS
 */

function isPalindrome(x) {
  let out = '';
  if (x === '' || x.length === 1) {
    return true;
  } else {
    let low = x.toLowerCase();
    for (let i = low.length - 1; i >= 0; i--) {
      out +=low[i];
    }
    return low === out;
  }
}
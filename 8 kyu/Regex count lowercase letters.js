// Regex count lowercase letters

/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
 */

function lowercaseCount(str){
  let sss = str.toUpperCase();
  let i = 0; let count = 0;
  while (i < str.length) {
    if (sss[i] !== str[i]) count++;
    i++;
  }
  return count;
}
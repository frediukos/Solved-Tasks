// Return substring instance count

/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
FUNDAMENTALS   STRINGS
 */

function solution(fullText, searchText) {
  let pos = fullText.indexOf(searchText);
  let count = 0;
  while (pos !== -1) {
    count ++;
    pos = fullText.indexOf(searchText, pos + 1);
  }
  return count;
}

// or

function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}
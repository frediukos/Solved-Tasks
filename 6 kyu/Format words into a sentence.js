// Format words into a sentence

/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""
ALGORITHMS   UTILITIES   FORMATTINGS   TRINGS
 */

function formatWords(w){
  if (w === null || w.length === 0) { return '' } else if (w.length === 1) return w+'' ;
  w = w.join(' ').replace(/\s\s/g, ' ').trim().replace(/\s/g, ', ');
  return !w.includes(' ')
    ? w+''
    : w.slice(0, w.lastIndexOf(', ')) + ' and ' + w.slice(w.lastIndexOf(', ')+2);
}
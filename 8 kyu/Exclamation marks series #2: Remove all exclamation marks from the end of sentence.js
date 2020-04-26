// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

/*
Description:

Remove all exclamation marks from the end of sentence.

Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note

Please don't post issue about difficulty or duplicate.
FUNDAMENTALS
 */

function remove(s){ console.log(s);
  let index = 0;
  if (!s.endsWith('!')) {
    return s
  } else
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '!') {
        index++;
      } else break;
    }
  return s.slice(0, -(index));
}
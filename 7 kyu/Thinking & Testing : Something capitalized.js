// Thinking & Testing : Something capitalized

/*
No Story

No Description

Only by Thinking and Testing
 */

function testit(s){ console.log(s);
  if (s === '') return s + '';
  let out = [];
  let arr = s.split(' ');
  let str;
  for (let i = 0; i < arr.length; i++) {
    str = arr[i].slice(0,arr[i].length -1) + arr[i][arr[i].length - 1].toUpperCase();
    out.push(str);
  }
  return out.join(' ') + '';
}
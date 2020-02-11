// Inside Out Strings

/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
FUNDAMENTALS  STRINGS  ARRAYS
 */

function insideOut(x) {
    let arr = x.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            let r, l = '';
            let index = arr[i].length;
            if (index % 2 === 0) {
                r = arr[i].slice(0, index/2).split('').reverse().join('');
                l = arr[i].slice(index/2).split('').reverse().join('');
                arr[i] = r + l;
            } else {
                index = Math.floor(index/2);
                r = arr[i].slice(0, index).split('').reverse().join('');
                l = arr[i].slice(index+1).split('').reverse().join('');
                arr[i] = r + arr[i].slice(index, index+1) + l;
            }
        }
    }
    return arr.join(' ');
}
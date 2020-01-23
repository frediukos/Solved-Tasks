// Decipher this!

/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
 */

function decipherThis(str) {
    let out = str.split(' ');
    let arr = [];
    for (let i = 0; i < out.length; i++) {
        let code = out[i].replace(/\D/g, '');
        let s = String.fromCharCode(code);
        let char = out[i].replace(/\d/g, '');
        arr.push(s + char);
    }
    const done = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            let tmp = arr[i][0];
            tmp += arr[i][arr[i].length-1];
            tmp += arr[i].slice(2, arr[i].length-1);
            tmp += arr[i][1];
            done.push(tmp);
        } else done.push(arr[i]);
    }
    return done.join(' ');
}
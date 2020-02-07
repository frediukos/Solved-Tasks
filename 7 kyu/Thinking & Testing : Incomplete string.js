// Thinking & Testing : Incomplete string

/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
 */

function testit(s){
    console.log(s);
    if (s === '') return '';
    return s.replace(/../g, (s) =>
        String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2));
}
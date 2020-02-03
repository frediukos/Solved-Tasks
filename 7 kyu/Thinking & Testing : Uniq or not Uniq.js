// Thinking & Testing : Uniq or not Uniq

/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
 */

function testit(a,b){
    let arr = [...new Set(a)].concat([...new Set(b)]);
    return arr.sort((a, b) => a - b);
}
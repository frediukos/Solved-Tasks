// Braces status

/*
Write a function that checks the braces status in a string, and return True if all braces are properly closed, or False otherwise. Available types of brackets: (), [], {}.

Please note, you need to write this function without using regex!

Examples

"([[some](){text}here]...)"  =>  true
"{([])}"                     =>  true
"()[]{}()"                   =>  true
"(...[]...{(..())}[abc]())"  =>  true
"1239(df){"                  =>  false
"[()])"                      =>  false
")12[x]34("                  =>  false
 */

function bracesStatus(str){
    if (str === '') return false;
    let out = [];
    out.push(str.replace(/[a-z.]/ig, ''));
    let i = true;
    do {
        if (out[0].includes('()') || out[0].includes('[]') || out[0].includes('{}'))
        { i = true } else { i = false };
        out[0] = out[0].replace('()', '');
        out[0] = out[0].replace('[]', '');
        out[0] = out[0].replace('{}', '');
    } while (i === true);
    return out.join('').length === 0;
}
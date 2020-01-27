// sPoNgEbOb MeMe

/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?


You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Examples:

spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'
FUNDAMENTALS
 */

function spongeMeme(s) {
    let str = '';
    for (let i = 0; i < s.length; i++){
        if (i % 2) str = str + s[i].toLowerCase();
        else str = str + s[i].toUpperCase();
    }
    return str;
}
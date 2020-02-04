// makeBackronym

/*
back·ro·nym

An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON
(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"
Examples

"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"
FUNDAMENTALS  STRINGS  METHODS  FUNCTIONS  OBJECT-ORIENTED PROGRAMMING  CONTROL FLOW   BASIC LANGUAGE FEATURES
 */

var makeBackronym = function(str){
    let out = str.toUpperCase().split('');
    for (let i = 0; i < out.length; i++) {
        out[i] = dict[out[i]];
    }
    return out.join(' ');
};

//or

var makeBackronym = function(str){
    let out = [];
    for (let i = 0; i < str.length; i++) {
        out.push(dict[str[i].toUpperCase()]);
    }
    return out.join(' ');
};

//or

var makeBackronym = function(str){
    let res = [];
    str = str.toUpperCase();
    for (let i of str) {
        res.push(dict[i]);
    }
    return res.join(' ');
};
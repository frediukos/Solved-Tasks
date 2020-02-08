// My Languages

/*
Your task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: There will be no duplicate values.

Examples
{"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}   --> []
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
ALGORITHMS  SORTING  ARRAYS  HASHES  DATA STRUCTURES
 */

function myLanguages(res) {
    console.log(res);
    let out = [];
    for (let lang in res) {
        if (res[lang] >= 60) out.push(res[lang])
    }
    out = out.sort((a,b) => b-a);
    for (let i = 0; i < out.length; i++) {
        for (let lang in res) {
            if (res[lang] === out[i]) out[i] = lang;
        }
    }
    return out;
}

// or shorter

function myLanguages(res) {
    return Object.keys(res).filter(el => res[el] > 59).sort((a,b) => res[b] - res[a]);
}
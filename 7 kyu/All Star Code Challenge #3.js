//All Star Code Challenge #3

var removeVowels = function(str) {
  let sound = 'aeiou';
  let out =[];
  str.split('');
  for (let i = 0; i < str.length; i++) {
    if (!sound.includes(str[i])) out.push(str[i]);
  }
  return out.join('');
}

// or

var removeVowels = function(str) {
    let sound = 'aeiou';
    let out = '';
    const s = str.split('').map(el => {if (!sound.includes(el)) out +=el});
    return out;
}

//or

function removeVowels(str){
    return str.replace(/[aeiou]/ig,'')
}

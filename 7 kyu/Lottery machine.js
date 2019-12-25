//Lottery machine

function lottery(str){
    let num ='';
    const out = str.replace(/[a-z, A-Z]/ig,'');
    if ( out === '') {
        return 'One more run!';
    } else {
        return out.split('').filter((el, i) => i === out.indexOf(el) ).join('');
    }
}
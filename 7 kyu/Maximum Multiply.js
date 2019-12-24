//Maximum Multiple

function maxMultiple(divisor, bound){
    let out = 1;
    for (let i = 0; i <= bound; i++) {
        if (i % divisor  === 0) out = i;
    }
    return out;
}
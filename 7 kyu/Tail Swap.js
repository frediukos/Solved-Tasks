//Tail Swap

function tailSwap(arr) {
    let sign = arr[0].indexOf(':');
    let tmp1 = arr[0].substring(sign + 1);
    sign = arr[1].indexOf(':');
    let tmp2 = arr[1].substring(sign + 1);
    let out = [];
    out[0] = arr[0].replace(tmp1, tmp2);
    out[1] = arr[1].replace(tmp2, tmp1);
    return out;
}

//or

function tailSwap(arr) {
    const [aa, ab] = arr[0].split(":")
    const [ba, bb] = arr[1].split(":")
    return [`${aa}:${bb}`, `${ba}:${ab}`]
}
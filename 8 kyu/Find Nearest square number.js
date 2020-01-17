// Find Nearest square number

/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
 */

function nearestSq(n){
    let down = n;
    if (n === 1) return 1;
    if (!(Math.sqrt(n)+'').includes('.')) return n
    else while (down > 0) {
        n++;
        down--;
        if (n === 1 || down === 1) return 1;
        if (!(Math.sqrt(n)+'').includes('.')) return n
        else if (!(Math.sqrt(down)+'').includes('.')) return down;
    }
}

// or

function nearestSq(n){
    return Math.round(n ** 0.5) ** 2
}
//Beginner Series #3 Sum of Numbers

function getSum( a,b ) {
    let sum = 0;
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    for (let i = a; i <= b; i++) {
        sum +=i;
    }
    return sum;
}

// or

function getSum(a, b) {
    if (a === b) return a;
    let arr = [a, b];
    arr.sort((a, b) => a - b);
    for (let i = arr[0]; i < arr[1]-1; i++) {
        arr.push(i+1);
    }
    return arr.reduce((a, b) => a + b);
}

// or

function getSum(a, b) {
    let max = Math.max (a, b);
    let min = Math.min (a, b);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
// Odd/Even number of divisors

/*
Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.

Examples:

All prime numbers have exactly two divisors (hence 'even')

For n=12 the divisors are [1,2,3,4,6,12] – 'even'

For n=4 the divisors are [1,2,4] – 'odd'
ALGORITHMS  NUMBERS  MATHEMATICS
 */

function oddity(n){
    let count = 1;
    let i = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            let exp = 0;
            do {
                n /= i;
                exp++;
            } while (n % i === 0)
            count *= exp + 1;
        }
        i = i === 2 ? 3 : i + 2
    }

    if (n > 1) {
        count *= 2;
    }

    return count % 2 === 0 ? 'even' : 'odd';
}

//or

function oddity(n){
    return Math.sqrt(n)%1 ? "even" : "odd";
}
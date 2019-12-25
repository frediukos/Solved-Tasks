//Summing a number's digits

function sumDigits(number) {
    if (number) {
        number = Math.abs(number) + '';
        return number.split('').map(el => el * 1).reduce((acc, curr) => acc + curr);
    } else return 0;
}
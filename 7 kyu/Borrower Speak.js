// Borrower Speak

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

####javascript

getNumberFromString(s)
 */

function borrow(s){
    return s.replace(/[?]?[.]?[:]?[;]?[,]?!*[\s]?/g, '').toLowerCase();
}

// or use  \D
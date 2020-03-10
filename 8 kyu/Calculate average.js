// Calculate average

/*
Write function avg which calculates average of numbers in given list.

FUNDAMENTALS   FUNCTIONAL PROGRAMMING   DECLARATIVE PROGRAMMING
 */

const find_average = (array) => array.reduce((sum,el) => sum +=el) / array.length;
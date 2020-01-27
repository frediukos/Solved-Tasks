// Print a Rectangle Using Asterisks

/*
Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, the following call:

getRectangleString(3, 3);
Should return the following string:

***
* *
***
End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.
ALGORITHMS  STRINGS  SHAPE MODELING  GRAPHICS
 */

function getRectangleString(width, height) {
    let str = '';
    for (let i = 1; i <= height; i++){
        if (i === 1 || i === height) str = str + '*'.repeat(width) + '\r\n';
        else str = str + '*' + ' '.repeat(width-2) + '*' + '\r\n';
    }
    return str;
}
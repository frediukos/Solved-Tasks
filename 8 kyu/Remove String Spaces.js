// Remove String Spaces

/*
Simple, remove the spaces from the string, then return the resultant string.
FUNDAMENTALS  STRINGS  ARRAYS
 */

function noSpace(x){
    for (let i = 0; i < x.length; i++){
        x = x.replace(' ', '');
    };
    return (x);
}
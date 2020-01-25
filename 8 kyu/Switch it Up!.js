//Switch it Up!

/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
FUNDAMENTALS
 */

function switchItUp(number){
    let arr = ['Zero', 'One', 'Two', 'Three', 'Four',
        'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    return arr[number];
}
// Holiday II - Plane Seating

/*
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.
 */

function planeSeat(a){
    console.log(a);
    let b = parseInt(a);
    let out = '';
    if (b >= 1 && b <= 20) {
        out +='Front';
    } else if (b >= 21 && b <= 40) {
        out +='Middle';
    } else if (b >= 41 && b <= 60) {
        out +='Back';
    } else return 'No Seat!!';
    let c = a[a.length - 1];
    if (c === 'A' || c === 'B' || c === 'C') {
        out +='-Left'
    } else if (c === 'D' || c === 'E' || c === 'F') {
        out +='-Middle'
    } else if (c === 'G' || c === 'H' || c === 'K') {
        out +='-Right'
    } else return 'No Seat!!';
    return out;
}
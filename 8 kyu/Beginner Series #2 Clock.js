// Beginner Series #2 Clock

/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

#####Example:

past(0, 1, 1) == 61000
 */

function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000
}
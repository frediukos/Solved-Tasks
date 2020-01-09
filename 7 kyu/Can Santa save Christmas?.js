// Can Santa save Christmas?

/*
Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours.

Your Task:

You will get an array as input with time durations as string in the following format:
"hh:mm:ss"

Each duration is a present Santa has to distribute.

Return true or false whether he can do it in 24 hours or not.
 */

function determineTime(durations){
    console.log(durations);
    let tmp = [];
    let hour = 0;
    let min = 0;
    let sec = 0;
    for (i = 0; i < durations.length; i++) {
        tmp = durations[i].split(':');
        hour += +tmp[0];
        min += +tmp[1];
        sec += +tmp[2];
    }
    console.log(hour + ' ' + min + ' ' + sec)
    if ((hour * 3600 + min * 60 + sec) <= 24 * 3600) {
        return true;
    } else return false;
}
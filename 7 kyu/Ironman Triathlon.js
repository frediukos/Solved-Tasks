// Ironman Triathlon

/*
An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) (run, raced in that order and without a break. It hurts... trust me.

Your task is to take a distance that an athlete is through the race, and return one of the following:

If the distance is zero, return 'Starting Line... Good Luck!'.

If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

Finally, if the athlete has completed te distance, return "You're done! Stop running!".

All distance should be calculated to two decimal places.

FUNDAMENTAL SNUMBERS ARRAYS OBJECTS
 */

// long solution

function iTri(s){
    let stage = {
        Swim: 2.4,
        Bike: 112,
        Run: 26.2,
    };
    const out = {};

    let tmp;
    tmp = stage.Swim + stage.Bike + stage.Run - s;
    tmp = tmp.toFixed(2);
    if (s === 0) { return 'Starting Line... Good Luck!' }
    else if (s > 0 && s <= stage.Swim) {
        out['Swim'] = tmp + ' to go!';
        return out;
    } else if (s > stage.Swim && s <= stage.Bike + stage.Swim) {
        out['Bike'] = tmp + ' to go!';
        return out;
    } else if (s > stage.Bike + stage.Swim && s <= stage.Run + stage.Bike + stage.Swim) {
        if (tmp <= 10) { out['Run'] = 'Nearly there!'; return out; }
        else out['Run'] = tmp + ' to go!';
        return out;
    } else if (tmp < 0) return `You're done! Stop running!`
}
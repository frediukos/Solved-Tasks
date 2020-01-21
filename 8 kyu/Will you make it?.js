// Will you make it?

/*
Will you make it?

You were camping with your friends far away from home, but when it's time to go back, you realize
that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs
on about 25 miles per gallon. There are 2 gallons left. Considering these factors, wri
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= fuelLeft * mpg) {
        return true;
    }
    else {
        return false;
    }
}
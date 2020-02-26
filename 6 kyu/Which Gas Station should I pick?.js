// Which Gas Station should I pick?

/*
Which Gas Station should I pick?


You have to fill up your gas and there are multiple gas stations with different prices and different distance to you. Sometimes it is cheaper to drive to a more distant gas station, because the prices are cheaper!

Your tank can contain 60l at maximum.
You always fill your tank full
Calculate the current fuel in tank with the actual price of the gas stations
Your task:

Given an object with multiple gas stations, your currentFuel as integer between 0 and 60 and the fuel consumption of your car (l/100km, float) - find the cheapest gas station and return the name of the gas station!

Return undefined (in JS) | None (in Python) if there are no gas station or your fuel is not enough to reach one!

No need to test for invalid input!
Remember: You also need fuel to drive to the gas station! The way back home should also be considered :)

Example


var obj = {
            "gas_station1": {"price": 1.5, "distance": 50},
            "gas_station2": {"price": 2.0, "distance": 75}
          };
var currentFuel = 35;
var fuelConsumption = 7.5;

costs gas_station1 = 48.75; <- is cheaper
costs gas_station2 = 72.5;

#distance: distance between you and the gasstation in km
#fuelConsumption: how much your car consumes in l/100km
#currentFuel: your current fuel in l


FUNDAMENTALS   MATHEMATICS   ALGORITHMS   NUMBERS   OBJECTS
 */

function gasStation(obj, currentFuel, fuelConsumption) {
  let cheaperPrice; let minPrice = {};
  let canGo = currentFuel * 100 / fuelConsumption; // km
  let goTwoSide = 0; let min;
  for (let gas in obj) {
    if (canGo >= obj[gas]['distance']) {
      goTwoSide = ((fuelConsumption * obj[gas]['distance']) / 100);
      obj[gas]['price'] = (60 - (currentFuel - goTwoSide)) * obj[gas]['price'];
      obj[gas]['price'] = goTwoSide * obj[gas]['price'] + obj[gas]['price'];
      minPrice[gas] = obj[gas]['price'];
    }
    else { obj[gas]['price'] = undefined;}
  }
  min = Object.values(minPrice)[0];
  for (let key in minPrice) {
    if (minPrice[key] <= min) {
      min = minPrice[key];
      cheaperPrice = key;
    }
  }
  return cheaperPrice;
}
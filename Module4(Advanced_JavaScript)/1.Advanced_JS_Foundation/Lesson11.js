import { interplanetaryDestinationsArr, shortSpaceTripsArr } from "./data.js";
import getMatchingTripsArr from "./getMatchingTripsArr.js";

console.log("Matching Trips:", getMatchingTripsArr(interplanetaryDestinationsArr, "Mars"));

/* define print function */
function print(msg) {
    console.log(msg)
}
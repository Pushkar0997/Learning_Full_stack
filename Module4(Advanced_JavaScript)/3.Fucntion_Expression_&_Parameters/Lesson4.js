//Inline Arrow Function Challenge

const distanceTraveledMiles = [267,345,234,456,123,543,654,321,432,213];

// const totalDistance = distanceTraveledMiles.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// },0);

// const distanceTraveledKm= distanceTraveledMiles.map (function(distance){
//     return Math.round(distance * 1.60934);
// })

//Refactored using Arrow Function

const distanceTraveledKm= distanceTraveledMiles.map(distance => Math.round(distance * 1.60934));

console.log(distanceTraveledKm); // [ 429, 555, 377, 734, 198, 874, 1053, 516, 695, 342 ]

function print(msg){
    console.log(msg);
}
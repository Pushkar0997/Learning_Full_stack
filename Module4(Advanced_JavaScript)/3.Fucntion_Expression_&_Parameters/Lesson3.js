//Arrow Function Challenge

// function speedWarning(speed){
//     return `You are goint at ${speed} mph, slow down!`;
// }

const speedWarning1 = speed => `You are goint at ${speed} mph, slow down!`;

//console.log(speedWarning1(80)); // You are goint at 80 mph, slow down!

/* 
Challenge 1:
1. Refactor the speedWarning function to be an arrow function.
2. Make sure you write the least code possible.
*/

/*
Challenge 2:
1. Refactor this fucntion so it only warns the drivers who are going over the speed limit.
2. The function now takes two parameters, driver's actual speed and speedLimit.
*/

const sppedwarning2 = (speed, speedLimit) =>
{
    if (speed > speedLimit) {
        return `You are going at ${speed} mph, slow down!`;
    }
    else {
        return `You are moving at ${speed} mph, you are safe.`;
    }
}

console.log(sppedwarning2(90, 50)); // You are going at 90 mph, slow down!

function print(msg){
    console.log(msg);
}
// function displayTrafficLight(color) {
//     console.log(color)  /* use color, not light */
// }

// setTimeout(displayTrafficLight, 0, 'Green');

// setTimeout(displayTrafficLight, 1000, 'Yellow');

// setTimeout(displayTrafficLight, 2000, 'Red');



// /* define print function */
// function print(msg) {
//     console.log(msg)
// }

//challenge

function logAnswer(answer, points){
    console.log(`The answer is ${answer} of course! If you got that right, give yourself ${points} points!`)
}

console.log("What is the capital of India?")

/*
Challenge: call logAnswer after 3 seconds
2. Make sure logAnswer has all the info it needs.
The answer is New Delhi of course! If you got that right, give yourself 10 points!
*/

const questionTimer = setTimeout(logAnswer, 3000, 'New Delhi', 10);

document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(questionTimer);
    console.log('You have stopped the timer. No answer will be logged.');
})


// // /* define print function */
// function print(msg) {
//     console.log(msg)   
// }
//Hoisting in JavaScript

//Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of 
// their containing scope during the compilation phase. This means that you can use variables and functions before 
// they are declared in the code.

//Challenge
//1. Predict the output of the following code snippet without running it.
//2. Explain why JavaScript behaves this way in this scenario.

function getWeather() {
    return "Today's weather is warm and sunny.";
}

console.log(getWeather()); // Output: undefined

console.log(getNews())

function getNews() {
    return "JavaScript Hoisting is interesting!";
}

// console.log(trafficInfo)

// let trafficInfo = "Traffic is smooth today.";

//Explanation:
//In the above code, the function getWeather is hoisted, but only its declaration is hoisted, not its definition.
//Therefore, when we call getWeather before its definition, it returns undefined.
//Similarly, the function getNews is hoisted completely, so calling it before its definition works fine.
//However, the variable trafficInfo is declared using let, which is not hoisted in the same way as var.
//Accessing it before its declaration results in a ReferenceError.
//Although javascript knows that it exist it can't access it as we get the error.


// console.log(randVar)
//This will give error that this doens't exist or it is not defined

//The issue with trafficinfo is that it exist in Temporal Dead Zone(TDZ) from the start of the block until the declaration
// is processed.
//It is similar to 1st few minutes in morning where you know who you are but you can't do anything 
//until you have your morning coffee.
//Variable and declarations are hoisting not invocations and initializations.

//So we can say that only var declarations are hoisted and initialized with undefined.
//like const trafficinfo above console.log and trafficinfo declaration afterwards
//const trafficinfo
//console.log(trafficinfo)
//trafficInfo = "Traffic is smooth today.";
//It is something like the above code where const declaration is hoisted but not initialized

//If we use var instead of let or const for trafficInfo then it will work fine
//As var declarations are hoisted and initialized with undefined
//So the output will be undefined instead of ReferenceError


function print(msg) {
    console.log(msg)
}

//SO in conclusion we can say that
//1. Function declarations are hoisted completely.
//2. var declarations are hoisted and initialized with undefined.
//3. let and const declarations are hoisted but not initialized, leading to ReferenceError if accessed before declaration.
//Arrow Function -- A concise way to write functions in JavaScript

// Traditional Function Expression
const getSpendAlert = function(amount){
    return `You have spent $${amount} today!`;
};

console.log(getSpendAlert(50)); // You have spent $50 today!

// Arrow Function Expression
const getSavingsAlert = (amount) => {
    return `You have saved $${amount} today!`;
};

console.log(getSavingsAlert(30)); // You have saved $30 today!
// Arrow Function with implicit return (no curly braces needed for single expression)
const getInvestmentAlert = amount => `You have invested $${amount} today!`;

// No parentheses needed for single parameter
console.log(getInvestmentAlert(100)); // You have invested $100 today!

// Arrow Function with multiple parameters
const getBudgetAlert = (spent, saved) => {
    return `You have spent $${spent} and saved $${saved} today!`;
};

console.log(getBudgetAlert(70, 20)); // You have spent $70 and saved $20 today!

// Arrow Function with no parameters
const getWelcomeMessage = () => 'Welcome to your financial dashboard!';

console.log(getWelcomeMessage()); // Welcome to your financial dashboard!

// Note: Arrow functions do not have their own 'this' context. 
// They inherit 'this' from the surrounding scope.

// Example to illustrate 'this' context
const user = {
    name: 'Alice',
    regularFunction: function() { 
        console.log('Regular Function:', this.name);
    }
    ,
    arrowFunction: () => {
        console.log('Arrow Function:', this.name);
    }
}

//Requirement for curly braces and return statement in arrow functions
user.regularFunction(); // Regular Function: Alice
user.arrowFunction(); // Arrow Function: undefined (or global context name) 

//We can remove curly braces and return statement for single line functions
const multiply = (a, b) => a * b;
console.log(multiply(5, 4)); // 20

//But when the code block has multiple lines, we need curly braces and return statement
const divide = (a, b) => {
    if(b === 0){
        return 'Cannot divide by zero';
    }
    else{
        return a / b;
    }
};

console.log(divide(20, 4)); // 5
console.log(divide(20, 0)); // Cannot divide by zero

function print(msg){
    console.log(msg);
}
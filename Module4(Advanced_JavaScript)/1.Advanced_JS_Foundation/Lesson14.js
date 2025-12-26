//Pre-increment and Post-increment Operators

let currentTicketNumber = 0;

function getNextTicketNumber() {
    // return currentTicketNumber++;
    return ++currentTicketNumber;
}


//Simulating guests arriving and receiving Ticket Numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`); //1
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`);

function print(msg) {
    console.log(msg)
}

/* 
Difference between Pre-increment and Post-increment:
1. Pre-increment (++var): Increments the variable's value by 1 first, then returns the incremented value.
2. Post-increment (var++): Returns the current value of the variable first, then increments the variable's value by 1.

And same thing applies for Pre-decrement and Post-decrement
*/
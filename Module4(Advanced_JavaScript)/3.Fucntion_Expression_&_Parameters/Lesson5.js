import { itemsBoughtArr } from "./itemsBoughtArr.js";

function calculateTotalPrice(itemsBoughtArr,discount) {
    if (!discount) {
        discount = 0;
    }
/*
Challenge:
1. Use the `reduce` method to calculate the total price of all items in the `items` array.
2. Return the total price.
*/

    const total = itemsBoughtArr.reduce((total, currentItem) => 
        total + currentItem.price,0
    )
    return total - discount;
}

console.log("Total Price of Items Bought:");
console.log(calculateTotalPrice(itemsBoughtArr));





/*
What is reduce?
The 'reduce' method in JavaScript is used to reduce an array to a single value by executing
a reducer function on each element of the array. The reducer function takes two arguments:
an accumulator (which accumulates the result) and the current value (the current element 
of the array being processed). The reducer function is called for each element in the array,
and the result of the reducer function becomes the new accumulator value. The reducer
functionbeing processed in the array). The 'reduce' method can also take an optional initial
value for the accumulator.   
 const totalPrice = items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
    }, 0);
*/

function print(msg){
    console.log(msg);
}
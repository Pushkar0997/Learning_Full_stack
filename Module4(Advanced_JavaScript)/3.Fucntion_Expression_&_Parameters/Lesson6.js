//default parameters

import { itemsBoughtArr } from "./itemsBoughtArr.js";

function calculateTotalPrice(itemsBoughtArr,discount = 0) {

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
console.log(calculateTotalPrice(itemsBoughtArr,10));


function print(msg){
    console.log(msg);
}
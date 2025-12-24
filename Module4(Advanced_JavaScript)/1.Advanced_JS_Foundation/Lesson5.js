/*Choose one item to buy from wending machine based on the amount of money you have
Price List
 * coffee - $2
 * Sandwich - $5
 * Salad - $7
 * Smoothie - $10
 * Lemon Cake - $15 
*/

function selectItem(item) {
    let price = 0

    switch (item) {
        case "coffee":
            price = 2
            break
        case "sandwich":
            price = 5
            break
        case "salad":
            price = 7
            break
        case "smoothie":
            price = 10
            break
        case "lemon cake":
            price = 15
            break
        default:
            console.log("Item not available")
            return null  /* return early */
    }
    
    return price  /* return the price */
}

function print(msg) {
    console.log(msg)
}

/* call selectItem and capture the price */
const item = "smoothie"
const price = selectItem(item)

/* build message and print */
if (price !== null) {
    const message = `You selected ${item}. That will be $${price}.`
    print(message)
}
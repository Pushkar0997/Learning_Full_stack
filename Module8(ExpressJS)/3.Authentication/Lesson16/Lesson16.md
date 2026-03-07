# Adding the cart_table

We create a new route inside the routes folder called `cart.js` and add the following code:

```js
import express from 'express'
import { addToCart } from '../controllers/cartController.js'

export const cartRouter = express.Router()
cartRouter.post('/add', addToCart) 
```
This code sets up a new Express router for handling cart-related routes. We import the `addToCart` function from the `cartController.js` file and define a POST route at `/add` that will call this function when a request is made to add an item to the cart.

Now inside our controllers folder, we create a new file called `cartController.js` and add the following code:

Challenge:

1. Write code to ensure that when a logged-in user clicks 'Add to Cart', the product is either added to their cart or its quantity increased if it’s already there, storing the data in the cart_items table. If successful, send the frontend this JSON: { message: 'Added to cart' }.

Ignore frontend console errors for now!

For testing, log in with:
Username: test
Password: test

Use logTable.js to verify success!

```js
import { getDBConnection } from '../db/db.js'

export async function addToCart(req, res) {
 const db = await getDBConnection()

 const productId = parseInt(req.body.productId, 10)

 if (isNaN(productId)) {
  return res.status(400).json({ error: 'Invalid product ID'})
 }

 const userId = req.session.userId

 const existing = await db.get('SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?', [userId, productId])

 if (existing) {
  await db.run('UPDATE cart_items SET quantity = quantity + 1 WHERE id = ?', [existing.id])
 } else {
  await db.run('INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, 1)', [userId, productId])
 }

 res.json({ message: 'Added to cart' })

}
```
In this code, we first establish a connection to the database. We then parse the `productId` from the request body and validate it. Next, we retrieve the `userId` from the session to identify the logged-in user. We check if there is already an entry in the `cart_items` table for this user and product. If an entry exists, we update the quantity by incrementing it by 1. If no entry exists, we insert a new record into the `cart_items` table with a quantity of 1. Finally, we send a JSON response confirming that the item has been added to the cart.
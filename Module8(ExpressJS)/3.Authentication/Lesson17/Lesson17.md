# The Cart Count

Now we add the Cart count to the header of the frontend.

We add the following code to the `cart.js` file:

```javascript
import express from 'express'
import { addToCart, getCartCount } from '../controllers/cartController.js'

export const cartRouter = express.Router()

cartRouter.post('/add', addToCart) 
cartRouter.get('/cart-count', getCartCount);
```

Then we add the `getCartCount` function to the `cartController.js` file:

Challenge:

1. Write code to ensure that when a logged-in user clicks 'Add to Cart', their current cart count is shown in the header with a cart icon. The frontend has been done for you. All the backend need do is provide the following JSON on the /api/cart/cart-count endpoint: 
{ <THE TOTAL NUMBER OF THE USER'S ITEMS> || 0 }

Ignore frontend console errors for now!
 
For testing, log in with:
Username: test
Password: test

```javascript
export async function getCartCount(req, res) {
  const db = await getDBConnection()

  const result = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])

  res.json({ totalItems: result.totalItems || 0 })
}
```
Here, we query the `cart_items` table to get the total quantity of items in the user's cart. We use `SUM(quantity)` to calculate the total number of items, and if there are no items, we return 0. The result is sent back as a JSON response.

And our complete `cartController.js` file should look like this:

```javascript
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

export async function getCartCount(req, res) {
  const db = await getDBConnection()

  const result = await db.get(`SELECT SUM(quantity) AS totalItems FROM cart_items WHERE user_id = ?`, [req.session.userId])

  res.json({ totalItems: result.totalItems || 0 })

}  
```
This code allows us to add items to the cart and retrieve the total count of items in the cart for the logged-in user. The frontend can then use this information to display the cart count in the header.



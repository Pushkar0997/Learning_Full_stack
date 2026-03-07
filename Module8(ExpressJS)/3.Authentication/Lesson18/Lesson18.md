# Cart Page Challenge 1

First we add a new route to the `cartRoutes.js` file:

```javascript
cartRouter.get('/', getAll) 
```

Then we add the `getAll` function to the `cartController.js` file:

1st we check if the user is logged in, if not we return an empty array:

```javascript
if (!req.session.userId) {
    return res.json({err: 'not logged in'})
  }
```
This ensures that only logged-in users can access their cart items. If a user is not logged in, we return a JSON response indicating that they are not logged in.

Then we query the database to get all cart items for the logged-in user:

Challenge: 

1. When a logged-in user clicks the cart icon, they will be redirected to the cart.html page. To render the user's cart, the frontend needs to get an array of objects similar to the example below when it makes a GET request to the /api/cart endpoint. Important: this array should be sent in a JSON object with the key 'items'.

[
  {
    cartItemId: 4,
    quantity: 2,
    title: 'Selling Dogma',
    artist: 'The Clouds',
    price: 44.99
  },
  {
    cartItemId: 5,
    quantity: 1,
    title: 'Midnight Parallels',
    artist: 'Neon Grove',
    price: 40.99
  }
]

The frontend JS has been done for you.

Ignore frontend console errors for now!
 
For testing, log in with:
Username: test
Password: test

Then click the cart icon to go to the cart page. You should see the user’s items.

```javascript
const db = await getDBConnection()

  const items = await db.all(`SELECT ci.id AS cartItemId, ci.quantity, p.title, p.artist, p.price FROM cart_items ci JOIN products p ON p.id = ci.product_id WHERE ci.user_id = ?`, [req.session.userId])

  res.json({ items: items})
```
This SQL query retrieves all cart items for the logged-in user by joining the `cart_items` table with the `products` table to get the product details (title, artist, price). The results are returned as a JSON response with the key 'items'.

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


export async function getAll(req, res) {

// Don't touch this code!
  if (!req.session.userId) {
    return res.json({err: 'not logged in'})
  }

  const db = await getDBConnection()

  const items = await db.all(`SELECT ci.id AS cartItemId, ci.quantity, p.title, p.artist, p.price FROM cart_items ci JOIN products p ON p.id = ci.product_id WHERE ci.user_id = ?`, [req.session.userId])

  res.json({ items: items})
} 
```
This code allows us to add items to the cart, get the total count of items in the cart, and retrieve all cart items for the logged-in user. The frontend can then use this information to display the cart contents and the cart count in the header.


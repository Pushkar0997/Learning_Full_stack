# Cart Page Challenge 2

Now we will add the feature to delete any item from the cart.

Inside `cartController.js`, we add the `deleteFromCart` function:

Challenge:
1. When a user clicks the delete button, that item should be deleted from the cart_items table, regardless of quantity.

2. Research Challenge: You need to think about how to end the response! What status code should you use, and what method? (Clue: it’s not the json() method!)


```javascript
export async function deleteItem(req, res) {

    const db = await getDBConnection()

    const itemId = parseInt(req.params.itemId, 10)

    if (isNaN(itemId)) {
      return res.status(400).json({error: 'Invalid item ID'})
    }

    const item = await db.get('SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    if (!item) {
      return res.status(400).json({error: 'Item not found'})
    }

    await db.run('DELETE FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    res.status(204).send()
}
```
Here, we first check if the `itemId` is valid. Then we check if the item exists in the user's cart. If it does, we delete it from the `cart_items` table. Finally, we send a 204 No Content status code to indicate that the deletion was successful and there is no content to return.

Our complete `cartController.js` file should look like this:

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


export async function deleteItem(req, res) {

    const db = await getDBConnection()

    const itemId = parseInt(req.params.itemId, 10)

    if (isNaN(itemId)) {
      return res.status(400).json({error: 'Invalid item ID'})
    }

    const item = await db.get('SELECT quantity FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    if (!item) {
      return res.status(400).json({error: 'Item not found'})
    }

    await db.run('DELETE FROM cart_items WHERE id = ? AND user_id = ?', [itemId, req.session.userId])

    res.status(204).send()
}
```
This code allows us to add items to the cart, retrieve the total count of items in the cart, get all items in the cart, and delete specific items from the cart for the logged-in user. The frontend can use these endpoints to manage the cart functionality effectively.

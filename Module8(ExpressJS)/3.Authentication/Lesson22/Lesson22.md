# Protecting Cart Routes

We create a new file `requireAuth.js` in the `middleware` folder to protect the cart routes. This middleware will check if the user is authenticated before allowing access to the cart routes.

Challenge:
1. Create middleware that checks if the session has a userId attached to it. 
   
   - If it doesn’t, log to the console that access has been blocked, and end the response with a 401 and this json: { error: 'Unauthorized' }
   - If the session does have a userId, pass control on to the next middleware. 
   - Place the middleware to protect our cart routes.

You will need to write code both here and wherever you choose to place the middleware.

```javascript
export function requireAuth(req, res, next) {

  if (!req.session.userId) {

    console.log('Access to protected route blocked')
    return res.status(401).json({ error: 'Unauthorized' })

  }

  next()
}
```

This code will block access to any route that uses the `requireAuth` middleware if the user is not authenticated (i.e., if there is no `userId` in the session). If the user is authenticated, it will allow them to proceed to the next middleware or route handler.

Now we will add this middleware to the cart routes in our `cart.js` router file.

```javascript
import express from 'express'
import { 
  addToCart, 
  getCartCount, 
  getAll, 
  deleteItem, 
  deleteAll } from '../controllers/cartController.js'
import { requireAuth } from '../middleware/requireAuth.js'

export const cartRouter = express.Router()

cartRouter.post('/add', requireAuth, addToCart) 
cartRouter.get('/cart-count', requireAuth, getCartCount)
cartRouter.get('/', requireAuth, getAll) 
cartRouter.delete('/all', requireAuth, deleteAll) 
cartRouter.delete('/:itemId', requireAuth, deleteItem) 
```
Here, we have added the `requireAuth` middleware to all the cart routes. This means that any request to these routes will first go through the `requireAuth` middleware, which will check if the user is authenticated before allowing access to the route handlers.

Now, if an unauthenticated user tries to access any of the cart routes, they will receive a 401 Unauthorized response, and a message will be logged to the console indicating that access has been blocked.
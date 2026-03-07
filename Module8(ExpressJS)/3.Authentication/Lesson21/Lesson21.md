# Aside : Protected Routes

In the complete projects , we have many routes assigned with any user can access. But currently, suppose we make some defaults and any non-logged in user can access the cart page and see the cart items. This is not a good practice. We should only allow logged-in users to access their cart.

So we need to protect the cart routes. To do this, we will check if the user is logged in by checking if `req.session.userId` exists. If it doesn't exist, we will return an error response.

And we can also use a middleware function to check if the user is logged in before allowing access to the cart routes. This way, we can reuse the middleware for any route that requires authentication.

We can put the middleware in the specific routes that we want to protect, And for an example let's do like this:

Suppose we are montinoring all signin , so we create a folder named `middlewares` and inside it we create a file named `logSignIn.js` and inside it we write the following code:

```javascript
export function logSignin(req, res, next) {

  console.log('sign in attempted')

  next()

}
```

This simple code will just log a message every time a user attempts to sign in. We can then use this middleware in our signin route like this inside `auth.js`:

```javascript
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js'
import { logSignin } from '../middleware/logSignin.js'
import express from 'express'

export const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', logSignin, loginUser) 
authRouter.get('/logout', logoutUser)
```
Now our middleware will be executed every time a user attempts to log in, and we will see the message "sign in attempted" in the console.
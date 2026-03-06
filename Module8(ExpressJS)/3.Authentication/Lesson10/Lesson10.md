# Add express - session

1st we need to install express-session package

```bash
npm install express-session
```

Then we need to set up the session middleware in our Express application. We can do this by adding the following code to our main server file (e.g., `server.js`):

```javascript
import express from 'express';
import session from 'express-session';

const secret = process.env.SPIRAL_SESSION_SECRET || 'jellyfish-baskingshark'

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: lax
  }
}))
```
Here, we are configuring the session middleware with a secret key, and setting some options for how the session should be handled. The `secret` is used to sign the session ID cookie, and should be kept secure in a production environment. The `resave` and `saveUninitialized` options control when sessions are saved to the session store, and the `cookie` option allows us to configure the properties of the session cookie.

Challenge:
  1. Store the 'lastID' from the database insertion above to the 'userId' property on the 'session' object on the request. This will bind our logged in user to the session.

Inside the `authController.js` file, after the user has been successfully authenticated and their information has been stored in the database, we can add the following code to store the user's ID in the session:

```javascript
req.session.userId = result.lastID
```
Here, `result.lastID` is the unique identifier of the newly created user in the database. By assigning it to `req.session.userId`, we are associating the user's session with their ID, allowing us to easily access their information in subsequent requests.

This way, when the user makes future requests to the server, we can check if `req.session.userId` exists to determine if they are logged in and retrieve their information from the database as needed.

The complete `authController.js` file should look like this:

```javascript
import validator from 'validator'
import { getDBConnection } from '../db/db.js'
import bcrypt from 'bcryptjs'

export async function registerUser(req, res) {

  let { name, email, username, password } = req.body

  if (!name || !email || !username || !password) {

    return res.status(400).json({ error: 'All fields are required.' })

  }

  name = name.trim()
  email = email.trim()
  username = username.trim()

  if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)) {

    return res.status(400).json(
      { error: 'Username must be 1–20 characters, using letters, numbers, _ or -.' }
    )
  }

  if (!validator.isEmail(email)) {

    return res.status(400).json({ error: 'Invalid email format' })

  }

  try {

    const db = await getDBConnection()

    const existing = await db.get('SELECT id FROM users WHERE email = ? OR username = ?', [email, username])

    if (existing) {
      return res.status(400).json({ error: 'Email or username already in use.' })
    }

    const hashed = await bcrypt.hash(password, 10)

    const result = await db.run('INSERT INTO users (name, email, username, password) VALUES (?, ?, ?, ?)', [name, email, username, hashed])
    console.log(result)

    req.session.userId = result.lastID

    res.status(201).json({ message: 'User registered'})
  } catch (err) {

    console.error('Registration error:', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' })

  }


}
```
This code handles the user registration process, including validating the input, checking for existing users, hashing the password, inserting the new user into the database, and storing the user's ID in the session for future authentication.

And the complete `server.js` file should look like this:

```javascript
import express from 'express'
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'
import session from 'express-session'

const app = express()
const PORT = 8000
const secret = process.env.SPIRAL_SESSION_SECRET || 'jellyfish-baskingshark'

app.use(express.json())

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}))

app.use(express.static('public'))

app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
```
This code sets up the Express server, configures the session middleware, and defines the routes for products and authentication. The server listens on port 8000 and serves static files from the 'public' directory.
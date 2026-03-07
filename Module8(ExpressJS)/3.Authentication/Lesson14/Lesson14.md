# Add Logout Functionality

Last time we implemented user registration and login functionality. Now, let's add the ability for users to log out of their accounts.

Inside the `authController.js` file, we will create a new function called `logoutUser`. This function will be responsible for destroying the user's session, effectively logging them out of the application.

Challenge:
1. Create a function which logs out the user. 
- You can use the .destroy() method directly on the session.
- .destroy() takes a callback function which you can use to send a confirmation response with this JSON:
  { message: 'Logged out' }

You will need to write code here and in one other place!

Test with:
username: test
password: test

```Js
export async function logoutUser(req, res) {

  req.session.destroy( () => {

    res.json({ message: 'Logged out' })

  })

}
```
Here, we define the `logoutUser` function which takes the request and response objects as parameters. We call the `destroy` method on the session object to end the user's session. The `destroy` method takes a callback function that is executed once the session has been destroyed. Inside this callback, we send a JSON response confirming that the user has been logged out.

And the complete code for `authController.js` would look like this:

```Js
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

    res.status(201).json({ message: 'User registered' })
  } catch (err) {

    console.error('Registration error:', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' })

  }

}

export async function loginUser(req, res) {

  let { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' } )
  }

  username = username.trim()

  try {
    const db = await getDBConnection()

    const user = await db.get('SELECT * FROM users WHERE username = ?', [username])

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials'})
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {

      return res.status(401).json({ error: 'Invalid credentials'})

    }

    req.session.userId = user.id
    res.json({ message: 'Logged in' })

  } catch (err) {
    console.error('Login error:', err.message)
    res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}


export async function logoutUser(req, res) {

  req.session.destroy( () => {

    res.json({ message: 'Logged out' })

  })

}
```
This code includes the `registerUser`, `loginUser`, and `logoutUser` functions. The `registerUser` function handles user registration by validating the input, checking for existing users, hashing the password, and inserting the new user into the database. The `loginUser` function handles user login by validating the input, checking for the user's existence, comparing the provided password with the stored hashed password, and creating a session if the credentials are valid. The `logoutUser` function destroys the user's session to log them out of the application. All functions include error handling to return appropriate responses in case of issues.

And we also need to add a new route for logging out in the `auth.js` file:

```Js
authRouter.get('/logout', logoutUser)
```
This line of code adds a new GET route for the `/logout` endpoint, which will call the `logoutUser` function when accessed. This allows users to log out by sending a GET request to this endpoint.
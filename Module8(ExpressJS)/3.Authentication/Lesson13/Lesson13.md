# Login

Inside `authController.js`

Challenge:

 1. If the user's login details are incomplete, end the response with this JSON and a suitable code:
    { error: 'All fields are required' } 

 2. If the user's login details are invalid, end the response with this JSON and a suitable code:
    { error: 'Invalid credentials'}. This could be because the user does not exist OR because the password does not match the username.

 3. If the user’s login details are valid, create a session for the user and end the response with this JSON:
    { message: 'Logged in' }

Look at .registerUser() above. Is there anything else you need to do?

Important: lastID is not available to us here, so how can we get the user’s ID to attach it to the session?

You can test it by signing in with the following:
username: test
password: test

```Js
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

```
Here, we first check if the username and password are provided in the request body. If either of them is missing, we return a 400 Bad Request response with an error message. Next, we trim the username to remove any leading or trailing whitespace. 

Then, we connect to the database and query for a user with the provided username. If no user is found, we return a 401 Unauthorized response with an error message indicating invalid credentials. If a user is found, we use bcrypt to compare the provided password with the hashed password stored in the database. If the passwords do not match, we again return a 401 Unauthorized response with an error message. If the credentials are valid, we create a session for the user by attaching their user ID to the session object. Finally, we return a JSON response indicating that the user has successfully logged in.

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
```
This code includes both the `registerUser` and `loginUser` functions. The `registerUser` function handles user registration by validating the input, checking for existing users, hashing the password, and inserting the new user into the database. The `loginUser` function handles user login by validating the input, checking for the user's existence, comparing the provided password with the stored hashed password, and creating a session if the credentials are valid. Both functions include error handling to return appropriate responses in case of issues.
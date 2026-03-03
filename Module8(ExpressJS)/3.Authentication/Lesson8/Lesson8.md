# Hash the password

Challenge:
  1. Import the bcryptjs package.
  2. Use it to hash the incoming password just before it's stored in the database.
    - Use a cost-factor of 10

To test, sign up a new user and run logTable.js.

Inside `authController.js` write the following code to hash the password before storing it in the database:

```javascript
    const db = await getDBConnection()

    const existing = await db.get('SELECT id FROM users WHERE email = ? OR username = ?', [email, username])

    if (existing) {
      return res.status(400).json({ error: 'Email or username already in use.' })
    }

    const hashed = await bcrypt.hash(password, 10)

    const result = await db.run('INSERT INTO users (name, email, username, password) VALUES (?, ?, ?, ?)', [name, email, username, hashed])

    res.status(201).json({ message: 'User registered'})
```

Here , we are hashing the password using `bcrypt.hash()` with a cost factor of 10 before storing it in the database. This ensures that even if the database is compromised, the actual passwords are not exposed, as they are stored in a hashed format. During the login process, you can use `bcrypt.compare()` to compare the entered password with the stored hash to verify the user's credentials.
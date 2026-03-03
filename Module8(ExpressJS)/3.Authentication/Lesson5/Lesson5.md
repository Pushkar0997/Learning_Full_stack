# Add user to DB

Challenge:
1. Check if the username or email address has already been used.
    - If it has, end the response with a suitable status code and this object:
      { error: 'Email or username already in use.' }.

    - If the username and email address are unique in the database, add the user to the table and send this JSON { message: 'User registered'}. Which status code should you use?

- When you have been successful, the mini browser will redirect to the homepage.

- Run logTable.js to check you have created a user. 

- You will be able to see the password in the db! We will fix that later!

Inside `authController.js`, add the following code after the validation code:

```javascript                                      
try {

    const db = await getDBConnection()

    const existing = await db.get('SELECT id FROM users WHERE email = ? OR username = ?', [email, username])

    if (existing) {
      return res.status(400).json({ error: 'Email or username already in use.' })
    }

    const result = await db.run('INSERT INTO users (name, email, username, password) VALUES (?, ?, ?, ?)', [name, email, username, password])

    res.status(201).json({ message: 'User registered'})
}catch (err) {

    console.error('Registration error:', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' })

  }
```

This will check if the email or username already exists in the database. If it does, it will return a 400 status code with an error message. If the email and username are unique, it will insert the new user into the database and return a 201 status code with a success message. If there is an error during the database operations, it will log the error and return a 500 status code with an error message.
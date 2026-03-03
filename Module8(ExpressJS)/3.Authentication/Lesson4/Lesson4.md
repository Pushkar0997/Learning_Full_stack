# Validate the User

Challenge:
1. Validate the incoming user data.
  - Make sure all fields are present.
  - Remove any whitespace where appropriate.
  - Use regex /^[a-zA-Z0-9_-]{1,20}$/ to check the username contains only the allowed characters.
  - Use the Validator package to check the email format is valid.

If fields are not present, the username uses disallowed characters, or the email address is not of a valid format, end the response with a suitable code and send an error object with a suitable message. For example:
   
   { error: 'All fields are required.' }

  - Test with console.logs.

Inside `authController.js`, add the following code to the `register` function:

```javascript
import validator from 'validator'

export async function registerUser(req, res) {

  let { name, email, username, password } = req.body

  if ( !name || !email || !username || !password ) {

    return res.status(400).json({ error: 'All fields are required.' })

  }

  name = name.trim()
  email = email.trim()
  username = username.trim()

  if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)) {

    return res.status(400).json({ error: 'Username must be 1–20 characters, using letters, numbers, _ or -.' })

  }

  if (!validator.isEmail(email)) {

    return res.status(400).json({ error: 'Invalid email format' })

  }

  console.log(req.body)
}

Here, we check if all fields are present. If not, we return a 400 status code with an error message. We then trim the name, email, and username to remove any leading or trailing whitespace. Next, we use a regular expression to validate the username and the Validator package to check the email format. If any of these validations fail, we return a 400 status code with an appropriate error message. Finally, we log the request body for testing purposes.
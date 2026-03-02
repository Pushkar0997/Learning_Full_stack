# Aside : Validation

![alt text](image.png)

![alt text](image-1.png)

We can do a npm package called `express-validator` to validate the incoming request data. This will help us ensure that the user is providing valid data when they try to register or log in. We can use this package to check if the username and password are of the correct format and length before we proceed with the registration or login logic. This will help us prevent invalid data from being stored in our database and improve the overall security of our application.

We can install the package using npm:

```bash
npm install validator
```

We can use it in `server.js` as follows:

```javascript
import express from 'express'
import validator from 'validator'

const app = express()

const newUser = {
    fullName: 'Marcus Aurelius',
    username: 'Marcus1',
    email: 'marcus@holy-roman-empire,org',
    password: 'Gladiators!'
}

const newUser2 = {
    fullName: 'Marcus Smith',
    username: 'Marcus1 ',
    email: 'marcus@average-empire.org',
    password: 'Moggy1'
}

console.log(validator.isEmail(newUser.email))

app.listen(8000, () => console.log('listening 8000'))
```
Here the Validator package is used to check if the email provided in the `newUser` object is a valid email address. The `validator.isEmail()` function returns `true` if the email is valid and `false` if it is not. In this case, since the email in `newUser` is not valid (it contains a comma instead of a dot), the output will be `false`. We can use this kind of validation in our registration and login routes to ensure that the data being sent by the user is valid before we process it further.
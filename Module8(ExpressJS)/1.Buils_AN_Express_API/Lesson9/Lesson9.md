# Aside : Path Parameters

Suppose we want to get a specific user by their ID. We can use path parameters to achieve this. Path parameters are defined in the route using a colon `:` followed by the parameter name.

We can do this in express by using `req.params` to access the path parameters. 

```javascript
import express from 'express'

const app = express()

app.get('/api/crypto-name/type', (req, res) => {

    console.log(req.params)
    res.json()
})

app.listen(8000, () => console.log('listening 8000'))
```
Here, this will give an error if something else other than `crypto-name` is used in the URL. To make it more flexible, we can use a path parameter like this:

```javascript
import express from 'express'

const app = express()

app.get('/api/crypto-name/:currency', (req, res) => {

    console.log(req.params)
    res.json()
})

app.listen(8000, () => console.log('listening 8000'))
```
Here, `:currency` is a path parameter. Now, if we make a request to `/api/crypto-name/bitcoin`, `req.params` will contain `{ currency: 'bitcoin' }`. This allows us to handle requests for different cryptocurrencies without having to define separate routes for each one.

## Exercise 1

Challenge: 
1. Update the code so a GET request to api/metals/gold
    logs an object {category: ‘metals’, type: ‘gold’}

But a GET request to api/crypto/eth
    logs an object {category: crypto-name, type: eth}

```javascript
import express from 'express'

const app = express()
app.get('/api/:category/:type', (req, res) => {

    console.log(req.params)
    res.json()
})

app.listen(8000, () => console.log('listening 8000'))
```
Here, we have defined a route with two path parameters: `:category` and `:type`. When a GET request is made to `/api/metals/gold`, `req.params` will contain `{ category: 'metals', type: 'gold' }`. Similarly, when a GET request is made to `/api/crypto/eth`, `req.params` will contain `{ category: 'crypto', type: 'eth' }`.

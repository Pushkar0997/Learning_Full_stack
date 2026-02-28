# Modularise the code

Our Current server.js file is getting quite long and it is not very modular. We can improve this by using `express.Router()` to create separate route handlers for different parts of our API. This will help us keep our code organized and easier to maintain as our application grows.

We have this server.js file currently:

```javascript
import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

/*
Challenge:
1. Refactor the code to use express.Router()

*/

const app = express()

app.get('/api', (req, res) => {

  let filteredData = startups

  const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

  if (industry) {
    filteredData = filteredData.filter(startup =>
      startup.industry.toLowerCase() === industry.toLowerCase()
    )
  }

  if (country) {
    filteredData = filteredData.filter(startup =>
      startup.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (continent) {
    filteredData = filteredData.filter(startup =>
      startup.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter(startup =>
      startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
    )
  }

  if (has_mvp) {
    filteredData = filteredData.filter(startup =>
      startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    )
  }

  res.json(filteredData)

})


app.get('/api/:field/:term', (req, res) => {
  
  const { field, term } = req.params
    
  const allowedFields = ['country', 'continent', 'industry']


  if (!allowedFields.includes(field)) {
    return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }

  const filteredData = startups.filter(
    startup => startup[field].toLowerCase() === term.toLowerCase()
  )

  res.json(filteredData)

})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
```
Here, we have two route handlers defined in our `server.js` file. We can refactor this code to use `express.Router()` to create separate route handlers for the `/api` endpoint and the `/api/:field/:term` endpoint. This will help us keep our code organized and easier to maintain as our application grows.

We can modularize our code by creating a new file called `apiRoutes.js` where we will define our routes and their corresponding controllers. Then, we can import this router into our `server.js` file and use it to handle requests to the `/api` endpoint. This way, we can keep our route definitions and their corresponding logic organized and modular.

And our server.js file will look like this:

```javascript
import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'

const PORT = 8000

const app = express()

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
```
Here, we have imported the `apiRouter` from our `apiRoutes.js` file and used it to handle requests to the `/api` endpoint. This way, all the routes defined in `apiRouter` will be prefixed with `/api`, and we can keep our route definitions and their corresponding logic organized and modular in the `apiRoutes.js` file. 
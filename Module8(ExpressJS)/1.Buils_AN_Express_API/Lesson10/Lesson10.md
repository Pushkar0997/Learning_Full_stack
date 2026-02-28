# Add Path Parameter 1

Challenge:
1. Add a new route which accepts GET requests to /api/<field>/<term>.
2. Filter the data based on the path params.
3. Serve the filtered data.

For now, don’t worry that using some fields will trigger an error.

** The functionality **
Get all startups in a given country via api/country/<country name>
Get all startups in a given continent via api/continent/<continent name>
Get all startups in a given industry via api/industry/<industry name>

**Test Cases** 

These should work:
  api/country/india
  api/continent/europe
  api/industry/ai

This will throw an error - but that's fine!
	api/has_mvp/true
```javascript
app.get('/api/:field/:term', (req, res) => {

  const { field, term } = req.params

  const filteredData = startups.filter(
    startup => startup[field].toLowerCase() === term.toLowerCase()
  )

  res.json(filteredData)

})
```
Here, we have defined a route with two path parameters: `:field` and `:term`. When a GET request is made to `/api/country/india`, `req.params` will contain `{ field: 'country', term: 'india' }`. The code then filters the `startups` data based on the specified field and term, and returns the filtered data as a JSON response.

Note: If a field that does not exist in the `startups` data is used, it will throw an error because `startup[field]` will be undefined. However, this is expected behavior for this exercise.

The complete server.js will look like this:

```javascript
import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

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

  const filteredData = startups.filter(
    startup => startup[field].toLowerCase() === term.toLowerCase()
  )

  res.json(filteredData)

})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
```

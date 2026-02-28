# Filtering by Query Parameters

We will do a challenge in this section to filter our data based on query parameters. We will modify our route handler to check for specific query parameters and filter the data accordingly.

```javascript
import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {

  let filteredData = startups
/*
Challenge:
1. When a user hits the /api endpoint with query params, filter the data so 
we only serve objects that meet their requirements. 
     
The user can filter by the following properties:
  industry, country, continent, is_seeking_funding, has_mvp

Test Cases

/api?industry=renewable%20energy&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/

  res.json(filteredData)

})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))


```
Above is the code for our route handler. We start by initializing a variable `filteredData` with the original `startups` data. Then, we will check for the presence of specific query parameters and filter the data accordingly. For example, if the user includes the `industry` query parameter, we will filter the `filteredData` to only include objects that match the specified industry. We will repeat this process for each of the query parameters we want to support. Finally, we will send the filtered data as a JSON response to the client.

Solution:

```javascript
import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {

  let filteredData = startups

  const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

  if (industry) {
    filteredData = filteredData.filter( startup => 
      startup.industry.toLowerCase() === industry.toLowerCase()
    )
  }

  if (country) {
    filteredData = filteredData.filter( startup => 
      startup.country.toLowerCase() === country.toLowerCase()
    )
  }
  
  if (continent) {
    filteredData = filteredData.filter( startup => 
      startup.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter( startup => 
      startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
    )
  }
  
  if (has_mvp) {
    filteredData = filteredData.filter( startup => 
      startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    )
  }


  res.json(filteredData)

})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
```

Here, we first destructure the query parameters from `req.query`. Then, for each parameter, we check if it exists and if it does, we filter the `filteredData` array accordingly. For string parameters like `industry`, `country`, and `continent`, we compare the values in a case-insensitive manner. For boolean parameters like `is_seeking_funding` and `has_mvp`, we parse the string value to a boolean using `JSON.parse()`. Finally, we return the filtered data as a JSON response.

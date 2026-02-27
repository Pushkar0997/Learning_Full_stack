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


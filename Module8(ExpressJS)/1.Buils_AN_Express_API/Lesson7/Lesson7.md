# Aside : Query Parameters

In express, query parameters are a way to pass additional information in the URL of a request. They are typically used to filter or sort data, or to specify options for the response.

In our server.js file, we can access query parameters using the `req.query` object. For example, we can modify our route handler like this:

```javascript
import express from 'express'

import { people } from './data.js'

const app = express()


app.get('/api', (req, res) => {
  console.log(req.query)
  res.json(people)
})

app.listen(8000, () => console.log('listening 8000'))

```

Here , when a GET request is made to the '/api' URL, we log the `req.query` object to the console. This object contains all the query parameters that were included in the request URL.

For example, if we make a GET request to `http://localhost:8000/api?name=John&age=30`, the `req.query` object will contain `{ name: 'John', age: '30' }`. We can then use these query parameters to filter or sort our data before sending the response.
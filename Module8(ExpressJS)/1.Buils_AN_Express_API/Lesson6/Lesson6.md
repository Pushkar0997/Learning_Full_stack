# Serving Data

we are just serving the data from a file and then importing it into our server.js file. and finally sending it as a response to the client.

the code in server.js file will look like this:

```javascript
import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {
  res.json(startups)
})

/*
Challenge:
  1. When the client makes a GET request to ‘/api’, serve all of our data as json.

  hint.md for help!
*/

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))

```

Here , we are importing the `startups` data from the `data.js` file and then defining a route for the URL '/api' using the `app.get()` method. When a GET request is made to this URL, the callback function is executed, which sends a JSON response containing the `startups` data using the `res.json()` method.

When you run this server and navigate to `http://localhost:8000/api` in your browser or make a GET request to that URL using a tool like Postman, you will receive a JSON response with the details of all the startups.

The `app.get()` method is used to define a route for handling GET requests to the specified URL. In this case, we are defining a route for '/api'. When a GET request is made to this URL, the callback function is executed, which sends a JSON response containing the `startups` data using the `res.json()` method.

# The initail Folder setup is put in the main folder of the section.
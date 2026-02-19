// Explainer: Adding POST

/*
Now we want that our users can also add new sightings to our data, so we need to add the feature of POST requests to our server.

To do that we will create a new function called handlePost() in our routeHandlers.js file, this function will handle the POST requests to the '/api' endpoint.

Adding POST functionality will require us to do a few things:
1. Collect the incoming data 
2. Parse the incoming data (since it will be in JSON format)
3. Sanitize the data (to prevent any malicious code from being added to our dataset)
4. Get our existing data, add the new sighting to it and save it back to the json file
5. Add the new sighting to our dataset and send a response back to the client.
5. Write the completed data to the JSON file.

We will have this 4 utility functions in our architecture for POST requests inside the routeHandlers.js file:

// parseJSONBody() will collect and parse the incoming JSON
// santizeData() 
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()



THe server.js code evolves to:


import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }
        else if (req.method === 'POST') {
            handlePost(req, res)
        }
*********
Challenge: 
   1. Add a route for a POST request to '/api'.
   2. When a request comes in, pass the req and res to handlePost().
**********
    }
    else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))


*/
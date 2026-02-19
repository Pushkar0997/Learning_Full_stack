// Wire up the api

/*
Start with uncommenting the code in index.js and then we will go through it step by step to understand how it works and how to use it in our app.

then we put this code inside sever an if condition :
    else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname) 
    }

and the final server code becomes:

import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
************
Challenge: 
   1. Set up a route for ‘/api’.
   2. Nest an if to check if the method is ‘GET’. 
   3. When a GET request is received to '/api', use handleGet() to handle it.
************
    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }
    }
    else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname) 
    }
}) 

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
 
So in this lesson we added the feature of Get requests to our server, so now when we make a GET request to the '/api' endpoint, the server will use the handleGet() function to handle that request and send the data back to the client.

In the next lesson we will add the feature of POST requests to our server, so that we can add new sightings to our data.

*/
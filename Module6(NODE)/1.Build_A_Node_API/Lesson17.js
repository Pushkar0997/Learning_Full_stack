// Filter By Query Parameters

/**
 * Node.js HTTP API Server with Query and Path Parameter Filtering
 * 
 * This module creates an HTTP server that serves destination data with filtering capabilities.
 * Clients can filter data using query parameters or path parameters.
 * 
 * @module Lesson17
 * @requires node:http - Core Node.js HTTP module for creating the server
 * @requires ./database/db.js - Database module that provides getDataFromDB() function to fetch all destination data
 * @requires ./utils/sendJSONResponse.js - Utility function to send JSON responses with status codes
 * @requires ./utils/getDataByPathParams.js - Utility function to filter data based on path parameters (continent/country)
 * @requires ./utils/getDataByQueryParams.js - Utility function to filter data based on query parameters
 * 
 * @constant {number} PORT - Server port number (8000)
 * 
 * @description
 * The server handles three main endpoint patterns:
 * 
 * 1. GET /api?country=value&continent=value&is_open_to_public=value
 *    - Returns filtered destinations based on query parameters
 *    - Supported query parameters: 'country', 'continent', 'is_open_to_public'
 *    - If no query params provided, returns all destination data
 * 
 * 2. GET /api/continent/:continentName
 *    - Extracts continent name from URL path
 *    - Returns all destinations matching that continent
 * 
 * 3. GET /api/country/:countryName
 *    - Extracts country name from URL path
 *    - Returns all destinations matching that country
 * 
 * 4. Any other route
 *    - Returns 404 Not Found error response with descriptive message
 * 
 * @param {http.IncomingMessage} req - The incoming HTTP request object
 * @param {http.ServerResponse} res - The outgoing HTTP response object
 * 
 * @returns {void}
 * 
 * @example
 * // Start the server
 * node Lesson17.js
 * 
 * // Client requests examples:
 * // GET http://localhost:8000/api?country=France
 * // GET http://localhost:8000/api?continent=Europe&is_open_to_public=true
 * // GET http://localhost:8000/api/continent/Europe
 * // GET http://localhost:8000/api/country/France
 */


/*
Challenge:

  1. Update filteredData so it holds only the objects the client wants 
     based on query params. If the client doesn’t use any query params, 
     serve all of the data.
     The query params we are accepting are:
     'country', 'continent', and 'is_open_to_public'.

     Keep our code tidy by doing the the filtering in a util function.
*/

import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)

  const queryObj = Object.fromEntries(urlObj.searchParams)

  if (urlObj.pathname === '/api' && req.method === 'GET') {
    
    let filteredData = getDataByQueryParams(destinations, queryObj)
    sendJSONResponse(res, 200, filteredData)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    const continent = req.url.split('/').pop()
    const filteredData = getDataByPathParams(destinations, 'continent', continent)
    sendJSONResponse(res, 200, filteredData)

  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {

    const country = req.url.split('/').pop()
    const filteredData = getDataByPathParams(destinations, 'country', country)
    sendJSONResponse(res, 200, filteredData)

  } 
  
  else {

    res.setHeader('Content-Type', 'application/json')
    sendJSONResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    }))   

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))


/*
Detailed Explanation of code:
    1. We import the necessary modules and functions.
    2. We create an HTTP server that listens for incoming requests.
    3. When a request is received, we fetch the data from the database.
    4. We parse the URL and extract query parameters.
    5. We check the request path and method to determine how to filter the data:
       - If the path is '/api' and the method is GET, we filter the data based on query parameters using the getDataByQueryParams function.
       - If the path starts with '/api/continent' and the method is GET, we extract the continent from the path and filter the data using getDataByPathParams.
       - If the path starts with '/api/country' and the method is GET, we extract the country from the path and filter the data using getDataByPathParams.
       - If none of the above conditions are met, we return a 404 error response.
    6. Finally, we start the server and listen on the specified port.

*/
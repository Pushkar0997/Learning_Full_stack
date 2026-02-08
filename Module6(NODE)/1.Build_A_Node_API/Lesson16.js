// Get the Query Parameters

import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)

  const queryObj = Object.fromEntries(urlObj.searchParams)

/*
Challenge:
  1. Have a look through the urlObj and find a property which we 
     can use instead of req.url. We need something that will 
     satisfy the condition regardless of whether query params were used.
*/


  if (urlObj.pathname === '/api' && req.method === 'GET') {
    
    let filteredDestinations = destinations

    console.log(queryObj)
    // update filteredDestinations

    sendJSONResponse(res, 200, filteredDestinations)

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
Block by Block Detailed Explanation of the code:

1. We import the necessary modules and functions: http for creating the server, getDataFromDB to fetch data, sendJSONResponse to send JSON responses, and getDataByPathParams to filter data based on path parameters.
2. We define the port number for the server to listen on.
3. We create an HTTP server using http.createServer(). The callback function is executed for each incoming request.
4. Inside the callback, we fetch the data from the database using getDataFromDB() and store it in the destinations variable.
5. We create a new URL object using the request URL and the host from the request headers. This allows us to parse the full URL, including any query parameters.
6. We then use urlObj.searchParams to access the query parameters and convert them into a plain object using Object.fromEntries() for easier access.
7. We check if the request is a GET request to the '/api' endpoint. If so, we initialize filteredDestinations with the full list of destinations and log the query parameters.
8. We then send a JSON response with the filtered destinations.
9. We check if the request is a GET request to the '/api/continent' endpoint. If so, we extract the continent from the URL, filter the data using getDataByPathParams(), and send a JSON response with the filtered data.
10. We check if the request is a GET request to the '/api/country' endpoint. If so, we extract the country from the URL, filter the data using getDataByPathParams(), and send a JSON response with the filtered data.
11. If none of the above conditions are met, we send a 404 JSON response indicating that the requested route does not exist.
12. Finally, we start the server and listen on the specified port, logging a message to indicate that the server is connected.


*/
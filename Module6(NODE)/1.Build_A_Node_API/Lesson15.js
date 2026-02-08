// Aside : Query Parameters

/*
Query Parameters are a way to send additional data to the server as part of the URL. They are typically used to filter or sort data, or to provide additional context for the request.

Query Parameters are added to the end of a URL after a question mark (?). Each parameter is represented as a key-value pair, separated by an equals sign (=). Multiple parameters can be included by separating them with an ampersand (&).

For us to include this in our code to handle query parameters, we can use the built-in URLSearchParams class in Node.js. This class provides methods to work with the query string of a URL.
we will use URL constructor to parse the URL and then use URLSearchParams to extract the query parameters.
*/

import http from 'node:http'

const server = http.createServer((req, res) => {

    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)

    console.log(queryObj)

})

server.listen(8000, () => console.log('Server listening on port 8000'))


/*
Explaination of the code:
1. We import the http module to create an HTTP server.
2. We create an HTTP server using http.createServer(). The callback function is executed for each incoming request.
3. Inside the callback, we create a new URL object using the request URL and the host from the request headers. This allows us to parse the full URL.
4. We then use urlObj.searchParams to access the query parameters. We convert the search parameters into a plain object using Object.fromEntries() for easier access.
5. Finally, we log the query parameters object to the console.
*/
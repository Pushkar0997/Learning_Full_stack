// Wrapping things up

/*
In this section , we learned how to create a simple Node API that serves JSON data. We created a server using the built-in http module, defined routes to handle different endpoints, and implemented a utility function to send JSON responses. This is a great starting point for building more complex APIs in the future.

- The core HTTP server is created using the http module, which listens for incoming requests and sends responses.
- The server handles three main endpoint patterns:
  1. GET /api with optional query parameters for filtering data
  2. GET /api/continent/:continentName for filtering by continent
  3. GET /api/country/:countryName for filtering by country
- If a request does not match any of the defined routes, a 404 Not Found response is sent.
- The sendJSONResponse utility function is used to send JSON responses with appropriate headers and status codes.
- creating a server that can handle different types of requests and filter data based on client input is a fundamental skill in building APIs. This example serves as a solid foundation for more advanced API development in Node.js.
- sending status codes and appropriate headers is crucial for clients to understand the response and handle it correctly. In this example, we set the Content-Type header to application/json and include CORS headers to allow cross-origin requests.
- By implementing filtering based on query parameters and path parameters, we can provide clients with flexible ways to access the data they need. This is a common pattern in API design that enhances usability and functionality.
- setting headers correctly is important for security and functionality. In this example, we set CORS headers to allow cross-origin requests, which is essential for web applications that consume the API from a different domain.
- handling requests/responses properly is key to building a robust API. This includes sending appropriate status codes, setting headers, and providing meaningful responses to clients.
- filtering data based on client input is a common requirement in APIs. By implementing filtering logic based on query parameters and path parameters, we can provide clients with the ability to retrieve only the data they need, improving performance and usability.
- extracting query parameters and path parameters from the request is essential for implementing filtering logic. In this example, we use the URL module to parse the request URL and extract query parameters, and we use string manipulation to extract path parameters.
- CORS (Cross-Origin Resource Sharing) is an important consideration when building APIs that will be consumed by web applications. By setting the appropriate CORS headers, we can allow cross-origin requests and enable our API to be used in a wider range of applications.

Stretch Goals:

  1. Implement additional filtering options based on other properties of the destination data (e.g., rating, price range).
  2. Add support for POST requests to allow clients to add new destinations to the database.
  3. Implement error handling for invalid query parameters or path parameters, returning appropriate error messages and status codes.
  4. Gentler error handling for unsupported HTTP methods (e.g., POST, PUT, DELETE) by returning a 405 Method Not Allowed response.
  5. Implement pagination for the GET /api endpoint to allow clients to retrieve data in smaller chunks.
  6. Handle POST requests to add new destinations, including parsing the request body and validating the input data before adding it to the database.
  7. Add better filtering options, such as filtering by rating or price range, to provide more flexibility for clients when retrieving data.
  8. Expand the API and sell it to a travel company, allowing them to use it in their applications to provide destination information to their users.
*/
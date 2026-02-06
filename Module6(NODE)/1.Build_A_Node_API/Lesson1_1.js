// Scrimba Networking Tool- and some other useful Networking concepts

/*
When working with backend development, the 1st thing you need to understand is Client-Server Architecture. In this architecture, the client (usually a web browser) sends requests to the server, which processes those requests and sends back responses. The server can be built using various technologies, and Node.js is one of the popular choices for building servers.

The client is the part of web application that interacts with the user. It can be a web browser, mobile app, or any other application that sends requests to the server. The server is responsible for handling those requests, processing data, and sending back responses to the client.

The server is a remote machine that handles data and sends back information or content to the client in the response to the request. The client and server communicate over a network, typically using the HTTP protocol. When a client sends a request to the server, it includes information such as the URL, HTTP method (GET, POST, etc.), headers, and sometimes a body with data. The server processes this request, performs the necessary operations (like querying a database or performing calculations), and then sends back a response that includes a status code (like 200 for success or 404 for not found), headers, and sometimes a body with data.

In addition to the client-server architecture, there are other important networking concepts to understand when working with backend development. These include:
1. HTTP Methods: These are the different types of requests that a client can make to a server, such as GET (to retrieve data), POST (to create new data), PUT (to update existing data), DELETE (to remove data), etc.
2. Status Codes: These are the codes that a server sends back in response to a client's request, indicating the outcome of the request. Common status codes include 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.
3. Headers: These are key-value pairs that provide additional information about the request or response. For example, a request header might include information about the client's browser, while a response header might include information about the server or the type of content being sent back.
4. Query Parameters: These are parameters that can be included in the URL of a request to provide additional information to the server. For example, in the URL "/api?continent=asia&is_open_to_public=true", "continent" and "is_open_to_public" are query parameters that the server can use to filter data or perform specific operations.
5. RESTful APIs: This is a common architectural style for designing networked applications. REST (Representational State Transfer) APIs use HTTP methods and status codes to create, read, update, and delete resources. They are stateless, meaning that each request from the client to the server must contain all the information needed to understand and process the request.

Understanding these concepts is crucial for building effective and efficient backend applications using Node.js or any other server-side technology. They form the foundation of how clients and servers communicate and how data is processed and exchanged over the network.

Essentially what happens is that the client sends a request to the server, the server processes that request and sends back a response. The client and server communicate over a network, typically using the HTTP protocol. The server can be built using various technologies, and Node.js is one of the popular choices for building servers.
As we work on the develop on the server side, so on the backend, we need a way to mimic a request from a client so we can monitor our response and check whether response is what we intened it to be. 
And there are various ways we can do that, if we are using a server to serve webpages we can use just browser to check the funtionality and style of the site, but things get a bit more complicated when working with REST APIs.

Representational State Transfer (REST) APIs are a common way to build web services that allow clients to interact with a server using standard HTTP methods. When working with REST APIs, you often need to test your endpoints to ensure they are functioning correctly and returning the expected responses.

A REST API allows clients to talk to a server to get access to(and possibly edit or add to) some data stored remotely.
e.g. Weather data, Currency exchange rates, Stock prices, etc.

How can we control and monitor communication between client and an API?
1. Browser: For simple GET requests, you can use a web browser to test your API endpoints. Just enter the URL of your API endpoint in the address bar, and the browser will send a GET request to that endpoint. However, this method is limited to GET requests and doesn't allow you to test other HTTP methods like POST, PUT, DELETE, etc.

2. Command Line Tools: Tools like curl or HTTPie allow you to send HTTP requests from the command line. These tools are more flexible than a browser and can be used to test all types of HTTP methods, as well as include headers and body data in your requests.

3. API Testing Tools: There are various API testing tools available, such as Postman, Insomnia, and Paw. These tools provide a user-friendly interface for sending HTTP requests, managing collections of API endpoints, and analyzing responses. They allow you to easily test different HTTP methods, set headers, include body data, and even automate testing with scripts.
4. Custom Scripts: You can also write custom scripts in languages like JavaScript, Python, or any other programming language to send HTTP requests to your API endpoints. This allows you to automate testing and integrate it into your development workflow.

In summary, when working with REST APIs, you can use a variety of tools to control and monitor communication between the client and the API. The choice of tool depends on your specific needs and preferences, but using dedicated API testing tools like Postman can provide

Controlling communication between the client and the API is crucial for testing and debugging your endpoints. By using tools like Postman, you can easily send requests to your API, inspect the responses, and ensure that your endpoints are working as intended. This allows you to identify and fix any issues in your API before deploying it to production, ensuring a better experience for your users.

Controlling communication between the client and the server can be done by:
1. Browser's dev tools Network tab
2. CURL(Terminal)
3. VS Code REST Client Extension e.g. Thunder Client
4. Postman
5. Insomnia
6. Scrimba's Networking Tool- Will be using this in the course

Endpoints: Endpoints are specific URLs that clients can send requests to in order to access certain resources or perform specific actions on the server. For example, if you have a REST API for managing a list of books, you might have endpoints like:
- GET /books: Retrieve a list of all books
- POST /books: Create a new book
- GET /books/:id: Retrieve a specific book by its ID
- PUT /books/:id: Update a specific book by its ID
- DELETE /books/:id: Delete a specific book by its ID

Above are the Methods and Endpoints for a REST API that manages a list of books. Each endpoint corresponds to a specific action that can be performed on the server, and the HTTP method (GET, POST, PUT, DELETE) indicates the type of action being performed.
The Methods and Endpoints together define the functionality of the API and how clients can interact with it. By testing these endpoints using tools like Postman or Scrimba's Networking Tool, you can ensure that your API is working correctly and returning the expected responses.
The Methods include:
- GET: Used to retrieve data from the server. For example, GET /books would retrieve a list of all books.
- POST: Used to create new data on the server. For example, POST /books would create a new book with the data provided in the request body.
- PUT: Used to update existing data on the server. For example, PUT /books/:id would update the book with the specified ID using the data provided in the request body.
- DELETE: Used to delete data from the server. For example, DELETE /books/:id would delete the book with the specified ID.
- PATCH: Used to partially update existing data on the server. For example, PATCH /books/:id would update specific fields of the book with the specified ID using the data provided in the request body.
and many more...

Endpoints are the specific URLs that clients can send requests to in order to access certain resources or perform specific actions on the server. They are defined by the developer and can be organized in a way that makes sense for the application being built. For example, if you have a REST API for managing a list of books, you might have endpoints like:

We can see the headers & response when we use a GET Requests.

Response contains all the information that the server sends back to the client after processing the request. It typically includes:
Headers: These are key-value pairs that provide additional information about the response, such as content type, caching directives, etc.
Status Code: This is a three-digit code that indicates the outcome of the request. Common status codes include 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.
Body: This is the main content of the response, which can be in various formats such as JSON, XML, HTML, etc. It contains the data or information that the server is sending back to the client.
Headers and status codes are important for understanding the context of the response and how to handle it on the client side. For example, a status code of 200 indicates that the request was successful and the body contains the expected data, while a status code of 404 indicates that the requested resource was not found on the server.
Headers can also provide important information about the response, such as the content type (e.g., application/json) which tells the client how to parse the body of the response, or caching directives that indicate how long the response can be cached by the client.

In summary, understanding the client-server architecture, RESTful APIs, and how to test and monitor communication between the client and the server is essential for building effective backend applications using Node.js or any other server-side technology. By using tools like Postman or Scrimba's Networking Tool, you can easily test your API endpoints, inspect responses, and ensure that your API is functioning correctly before deploying it to production.

Content - Types(Mime Types): Content-Type is a header that indicates the media type of the resource being sent in the response. It tells the client how to interpret the data in the body of the response. Common content types include:
- application/json: Indicates that the response body contains JSON data.
- text/html: Indicates that the response body contains HTML content.
- text/plain: Indicates that the response body contains plain text.
- application/xml: Indicates that the response body contains XML data.
- multipart/form-data: Indicates that the response body contains multiple parts, often used for file uploads.

The importance of the Content-Type header is that it allows the client to correctly parse and handle the data in the response. For example, if the Content-Type is application/json, the client knows to parse the body as JSON data, while if it is text/html, the client knows to render it as HTML content. This is crucial for ensuring that the client can properly display or use the data received from the server.
- Any data that is being send or received over the network has to be in a specific format, and the Content-Type header helps to specify that format. It is essential for ensuring that the client and server can communicate effectively and understand the data being exchanged.
- Specifically for REST APIs, the most common content type is application/json, as JSON is a widely used format for representing structured data. When a server sends a response with the Content-Type set to application/json, the client knows to parse the body of the response as JSON data, which can then be easily used in the application.
- Specifying the content type is also important for security reasons, as it helps to prevent certain types of attacks, such as cross-site scripting (XSS) attacks, by ensuring that the client only processes data in the expected format.
- It helps both the client and server to understand the format of the data being exchanged, which is crucial for proper communication and functionality of web applications and APIs.
- Failure to specify the correct content type can lead to issues where the client is unable to parse the response correctly, resulting in errors or unexpected behavior in the application. Therefore, it is important to always set the appropriate Content-Type header when sending responses from the server.
- And other bugs that can arise from misinterpreting the data format.

*/
// The HTTP Module

/*
To create a server in Node.js , we need to include the built-in http module, and then create a server object:

To import the http module , we need to set the type to module in the package.json file, and then we can use the import statement to include the http module in our code. The http module provides a set of functions and classes that allow us to create and manage HTTP servers and clients.
*/

import http from 'http';

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end('Hello from the server!')
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`)) 
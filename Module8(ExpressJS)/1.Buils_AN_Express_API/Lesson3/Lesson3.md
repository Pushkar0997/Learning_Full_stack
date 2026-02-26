# A Basic Server

We will start by creating a basic server that listens on a specific port and responds to incoming requests.

To create a basic server using Express.js, we need to follow these steps:
1. Import the Express module.
2. Create an instance of the Express application.
3. Define a route to handle incoming requests.
4. Start the server and listen on a specific port.

Make sure you are working in modular javascript.  
Here is an example of how to create a basic server using Express.js:

```javascript
import express from 'express'

const PORT = 8000

const app = express()

app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))
```

In the code above, we import the Express module and create an instance of the Express application. We then start the server by calling the `listen` method on the app instance, specifying the port number and a callback function that logs a message when the server is successfully connected.

The app.listen() method is used to bind and listen for connections on the specified host and port. In this case, we are listening on port 8000. When the server is successfully connected, it will log a message to the console indicating that the server is running and listening on the specified port.

The callback function passed to `app.listen()` is executed once the server starts successfully. It is a good place to log a message or perform any necessary setup tasks after the server is up and running.It is optional to provide a callback function, but it can be useful for confirming that the server has started and is listening on the correct port.
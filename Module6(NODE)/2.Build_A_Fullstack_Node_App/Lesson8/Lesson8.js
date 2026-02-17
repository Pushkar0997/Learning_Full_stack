// Serve index.html file

// Here we just use the knowledge of what we learned in the previous lesson to serve the index.html file. We use the readFile method from the fs module to read the contents of the file asynchronously, and then we send the content as a response to the client. This allows us to handle other requests while waiting for the file reading operation to complete, improving the overall performance of our application.
// This was done in the paranormal app.
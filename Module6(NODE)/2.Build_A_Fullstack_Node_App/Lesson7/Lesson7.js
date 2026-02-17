// Aside: File System(Fs) Module

/*
The Fs module provides various methods to interact with the file system, such as reading, writing, and deleting files. It allows you to perform operations on files and directories, making it an essential part of building a full-stack Node.js application.

Here are some common methods provided by the Fs module:
- fs.readFile(): Reads the contents of a file.
- fs.writeFile(): Writes data to a file, replacing the file if it already exists.
- fs.appendFile(): Appends data to a file, creating the file if it does not exist. Updates File if it already exists.
- fs.unlink(): Deletes a file.
- fs.mkdir(): Creates a new directory.
- fs.readdir(): Reads the contents of a directory.
- fs.rename(): Renames a file or directory.

There are various ways we can read files using the Fs module, such as using callbacks, promises, or async/await. The choice of method depends on your preference and the specific use case of your application.

1. Using FileSync Method:
The FileSync method allows you to read files synchronously, meaning that the execution of your code will be blocked until the file is read. This can be useful for small files or when you need to ensure that the file is read before proceeding with other operations.
Its really simple to use, you just need to call the readFileSync method and pass the file path as an argument. The method will return the contents of the file as a string.
In smaller apps sync works fine but in larger apps it can cause performance issues, as it blocks the event loop and prevents other operations from being executed until the file is read. Therefore, it is generally recommended to use asynchronous methods for reading files in larger applications to avoid blocking the event loop and improve performance.


import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {

  const pathToResource = path.join(__dirname, 'public', 'index.html')

  const content = fs.readFileSync(pathToResource, 'utf8')
*****
  (Here we are using the readFileSync method to read the contents of the index.html file located in the public directory. The 'utf8' encoding is specified to ensure that the content is returned as a string.
The Encoding is optional, if you dont specify it, the method will return a buffer instead of a string. A buffer is a temporary storage area for binary data, and it can be useful when working with large files or when you need to perform operations on the raw data.
utf8 works best for text files, while other encodings like 'base64' or 'hex' can be used for binary files.
So in general leaving it blank is the best option if you are not sure about the type of file you are working with, as it allows you to handle both text and binary files effectively.
Cause it will return a buffer, which can be easily converted to a string if needed, or it can be used directly for binary data without the need for additional encoding or decoding steps.)
*****
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content)

})

server.listen(PORT, () => console.log('connected on port 8000'))

2. Asynchronous File Reading:
The asynchronous file reading method allows you to read files without blocking the event loop, which can improve the performance of your application, especially when dealing with larger files or multiple file operations. This method uses callbacks to handle the completion of the file reading operation.
The readFile method is used to read files asynchronously. It takes the file path, encoding (optional), and a callback function as arguments. The callback function is called once the file reading operation is complete, and it receives an error object (if any) and the content of the file as parameters.

The problem with this approach is that it can lead to callback hell, where you have multiple nested callbacks that can make the code difficult to read and maintain. This is especially true when you have multiple asynchronous operations that depend on each other.

To avoid callback hell, you can use Promises or async/await syntax, which allows you to write asynchronous code in a more synchronous and readable manner. This can help improve the maintainability of your code and make it easier to understand.

import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {

  const pathToResource = path.join(__dirname, 'public', 'index.html')

  fs.readFile(pathToResource, 'utf8', (err, content) => {
    if (err) {
      console.log(err)
      return
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(content)
  })
*****
(This code uses the readFile method to read the contents of the index.html file asynchronously. The callback function is used to handle the completion of the file reading operation. If there is an error, it is logged to the console, and if the file is read successfully, the content is sent as a response to the client.
This approach allows the server to handle other requests while waiting for the file reading operation to complete, improving the overall performance of the application. However, as mentioned earlier, it can lead to callback hell if you have multiple nested callbacks, which is why using Promises or async/await can be a better option for handling asynchronous operations in a more readable and maintainable way.
THe problem as mentioned earlier is that it can lead to callback hell, where you have multiple nested callbacks that can make the code difficult to read and maintain. This is especially true when you have multiple asynchronous operations that depend on each other. To avoid this issue, you can use Promises or async/await syntax, which allows you to write asynchronous code in a more synchronous and readable manner. This can help improve the maintainability of your code and make it easier to understand.)
*****

})

server.listen(PORT, () => console.log('connected on port 8000'))

3. Using Promises:
The Promises approach allows you to handle asynchronous operations in a more readable and maintainable way. Instead of using callbacks, you can use the then() method to handle the completion of the file reading operation. This can help avoid callback hell and make your code easier to read.
Here we can use the fs.promises API, which provides promise-based versions of the file system methods. This allows us to use async/await syntax for a more synchronous and readable code structure.
We import promises from the fs module and use the readFile method to read the file asynchronously. The then() method is used to handle the completion of the file reading operation, and any errors are caught using the catch() method.
This wraps a promise around the file reading operation, allowing us to handle it in a more structured way and avoid callback hell. It also makes it easier to chain multiple asynchronous operations together without nesting callbacks.


import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs/promises'

const PORT = 8000
 
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  const pathToResource = path.join(__dirname, 'public', 'index.html')

  const content = await fs.readFile(pathToResource)
  console.log(content)
********
Here as you can see we are using the async/await syntax to read the file asynchronously. The readFile method returns a promise, which we await to get the content of the file. This allows us to write asynchronous code in a more synchronous and readable manner, avoiding callback hell and improving the maintainability of our code.
The async/await syntax makes it easier to handle asynchronous operations without the need for nested callbacks, making the code cleaner and more straightforward to understand. It also allows us to use try/catch blocks for error handling, which can further improve the readability of our code.
And we have removed the utf8 encoding, which means that the content will be returned as a buffer. This can be useful when working with binary files or when you want to handle the raw data directly without converting it to a string. If you need to convert the buffer to a string, you can use the toString() method on the buffer object.
This works better for larger files or when you want to handle the data in its raw form, as it allows you to work with both text and binary files effectively without the need for additional encoding or decoding steps.
Cause our browser and understand the buffer based on the content type specified in the response header, so it will render the content correctly even if it is returned as a buffer. The browser will interpret the buffer based on the content type and display it accordingly, whether it's text, HTML, or binary data.

********

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content)

})

server.listen(PORT, () => console.log('connected on port 8000'))
*/
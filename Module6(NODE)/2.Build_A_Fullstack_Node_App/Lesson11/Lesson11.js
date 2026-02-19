// serve the frontend

// Here we will just use what we have learned in the previous lessons to serve the frontend files (HTML, CSS, JS) from our Node.js server. We will use the 'fs' module to read the files from the file system and send them as responses to HTTP requests.

// There are some challenges in the lesson that are solved

// We learn about Enoent error handling and how to handle it in our code, we also learn about the importance of setting the correct content type for the response based on the file type being served. We also learn about the different approaches to get __dirname and __filename in ES Modules and CommonJS.

// What is Enoent error?
// Enoent stands for "Error NO ENTry" and it occurs when the file or directory you are trying to access does not exist. This can happen if the file path is incorrect, the file has been moved or deleted, or if there are permission issues preventing access to the file. In our case, it can occur if we try to read a file that doesn't exist in the specified path, which is why it's important to handle this error properly in our code to avoid crashes and provide meaningful feedback to the user.
// It can be handled by checking the error code in the callback of the fs.readFile method and sending an appropriate response to the client, such as a 404 Not Found status code and a message indicating that the requested resource was not found. This way, we can gracefully handle the error and provide a better user experience instead of crashing the server.

/*
In Node.js, there are some global variables that are available in every module. These include:
1. `__dirname`: This variable contains the directory name of the current module. It provides the absolute path to the directory where the current file is located.
2. `__filename`: This variable contains the file name of the current module. It provides the absolute path to the current file.
3. `global`: This is an object that provides access to global variables and functions. You can define your own global variables by attaching them to the `global` object.
Note: The availability and implementation of these globals differ based on the module system (CommonJS vs ES Modules) and Node.js version.
In CommonJS (the original Node.js module system), __dirname and __filename are automatically available as global variables without any imports needed. This was the standard approach before ES Modules were introduced.
In ES Modules (import/export syntax), __dirname and __filename are not automatically available. To get the same functionality, we need to import the 'url' and 'path' modules and use url.fileURLToPath() to convert the ES Module URL to a file path, and then use path.dirname() to extract just the directory name.

This approach works in Node.js v12.20+, v14.13+, and v16+ before v20, but it is not available in older versions of Node.js that do not support ES Modules.
*/
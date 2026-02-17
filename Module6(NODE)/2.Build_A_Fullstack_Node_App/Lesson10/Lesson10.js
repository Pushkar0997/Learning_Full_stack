// Aside: Serve Multiple Assets

/*
In order to serve multiple assets (like HTML, CSS, JS files) from a Node.js server, we can use the built-in 'fs' module to read files from the file system and send them as responses to HTTP requests.

We need to set the correct Path to the files we want to serve. In CommonJS, we can use __dirname and __filename to get the current directory and file path. However, in ES Modules, these are not available by default, so we need to use the 'url' and 'path' modules to achieve the same functionality.
And The content type of the response should be set according to the type of file being served (e.g., text/html for HTML files, text/css for CSS files, application/javascript for JS files).

We will use req.url to determine which file is being requested and serve the appropriate content based on that.

Currently, we are doing this:
  const publicDir = path.join(__dirname, 'public')
  const pathToResource = path.join(
    publicDir, 
    req.url === '/' ? 'index.html' : req.url)

Here we are joining the __dirname with 'public' to get the path to the public directory, and then we are joining that with the requested URL (or 'index.html' if the root URL is requested) to get the full path to the resource we want to serve.

Note: The availability and implementation of these globals differ based on the module system (CommonJS vs ES Modules) and Node.js version.

But we have a problem here, this will not work perfectly for css files , so we need to change it as per the file type, we can do this by checking the file extension and setting the content type accordingly. For example, if the file extension is .css, we can set the content type to text/css, if it's .js, we can set it to application/javascript, and so on.
We can do this with the help  of path module's extname method to get the file extension and then set the content type based on that.

const ext = path.extname(pathToResource)

for better code readability and maintainability, we can create a mapping of file extensions to content types and use that to set the content type in our response. This way, we can easily add support for more file types in the future by simply updating the mapping.

inside that we put this:
export function getContentType(ext) {
   
   const types = {
     ".js": "text/javascript",
     ".css": "text/css",
     ".json": "application/json",
     ".png": "image/png",
     ".jpg": "image/jpeg",
     ".jpeg": "image/jpeg",
     ".gif": "image/gif",
     ".svg": "image/svg+xml"
   }

  return types[ext.toLowerCase()] || "text/html"
}

The above list can be easily extended to include more file types as needed. The function getContentType takes a file extension as an argument and returns the corresponding content type based on the predefined mapping. If the file extension is not found in the mapping, it defaults to "text/html". This function can be used in our server code to set the correct content type for the response based on the requested file's extension. 
And this list can be found in the official MDN documentation for MIME types: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types 
Or on the internet simply by searching for "common MIME types" or "file extension to content type mapping".
in the above code, we have defined a function getContentType that takes a file extension as an argument and returns the corresponding content type based on a predefined mapping. If the file extension is not found in the mapping, it defaults to "text/html". This function can be used in our server code to set the correct content type for the response based on the requested file's extension.
and then we can use this function in our server code like this:
const contentType = getContentType(ext)
res.setHeader('Content-Type', contentType)

by importing this into our server file and using it to set the content type for the response, we can ensure that the correct content type is sent for each file type we serve, allowing browsers to properly render the content.
*/
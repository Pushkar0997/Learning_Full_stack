// A diversion into WriteHead()

/*
res.writeHead() is a method in Node.js that allows you to set the HTTP status code and headers for the response. It is typically used in conjunction with res.end() to send the response back to the client.
The syntax for res.writeHead() is as follows:
res.writeHead(statusCode[, statusMessage][, headers])- statusCode: The HTTP status code to send in the response (e.g., 200 for success, 404 for not found, etc.). - statusMessage (optional): A custom status message to accompany the status code. If not provided, Node.js will use the default message associated with the status code. - headers (optional): An object containing key-value pairs of headers to include in the response. For example, you can set the Content-Type header to specify the type of content being sent. Example
It does all this is one line of code which otherwise would require multiple lines to set the status code and headers separately. This makes it a convenient way to prepare the response before sending it back to the client.

res.writeHead vs res.setHeader
What's the difference between res.writeHead() and res.setHeader() in Node.js?

res.setHeader():
- Sets a response header but doesn't send it immediately. You can call res.setHeader() multiple times to set different headers before sending the response.
- Allows you to set or modify headers individually, at any point before sending the response.
- Example:res.setHeader('Content-Type', 'application/json'); res.setHeader('X-Custom-Header', 'MyValue'); res.writeHead(): - Sets the status code and headers for the response and sends them immediately. It is typically used when you want to send the response headers along with the status code in one step. - You can only call res.writeHead() once per response, as it sends the headers immediately. If you need to set additional headers after calling res.writeHead(), you would need to use res.setHeader() before calling res.writeHead(). - Example: res.writeHead(200, { 'Content-Type': 'application/json', 'X-Custom-Header': 'MyValue' }); In summary, use res.setHeader() when you want to set headers individually and at any point before sending the response, and use res.writeHead() when you want to set the status code and headers together and send them immediately.

res.writeHead():
- sends the header immediately.
- No further modification of the header is possible after this.

Potential Problems with res.writeHead():
- A header set using setHeader() after writeHead() will not be sent to the client, as the headers have already been sent. This can lead to confusion and bugs if you try to set headers after calling writeHead().
e.g. 
const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end('<html><h1>The server is working!!!</h1></html>')

})

In this example, the Access-Control-Allow-Origin and Access-Control-Allow-Methods headers will not be sent to the client because they are set after res.writeHead() has already sent the headers. To avoid this issue, you should set all necessary headers using res.setHeader() before calling res.writeHead().
And worse is you won't get any error or warning, just some unexpected behavior on the client side which can be very hard to debug.

This can be resolved by ensuring that all headers are set using res.setHeader() before calling res.writeHead(), or by including all necessary headers in the object passed to res.writeHead().

-  A header set using setHeader() can be overridden by a subsequent call to writeHead() if the same header is included in the headers object passed to writeHead(). This can lead to unintended consequences if you are not careful about the order of your header settings.
e.g:
const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'})
    res.end('<html><h1>The server is working!!!</h1></html>')

})

In this code, the Access-Control-Allow-Methods header is set to 'GET' using res.setHeader(), but then it is overridden to 'POST' in the headers object passed to res.writeHead(). This can lead to confusion and unintended behavior on the client side, as the client will receive 'POST' instead of 'GET' for the Access-Control-Allow-Methods header.

So in conclusion, while res.writeHead() is a convenient way to set the status code and headers in one step, it can lead to potential issues if not used carefully. It's important to understand the order of operations and how headers are set and sent in Node.js to avoid unexpected behavior in your applications.
*/
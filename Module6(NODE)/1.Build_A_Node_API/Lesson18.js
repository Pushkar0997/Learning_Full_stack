// CORS

/*
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. This is done to prevent malicious websites from accessing sensitive data on other domains.

When a web page makes a request to a different domain (cross-origin request), the browser sends an HTTP request with an "Origin" header that indicates the origin of the request. The server can then respond with specific headers to indicate whether the request is allowed or not.
To enable CORS on the server, we need to include the appropriate headers in the server's response. The most common header used for CORS is "Access-Control-Allow-Origin", which specifies which domains are allowed to access the resources on the server.
For example, if we want to allow all domains to access our API, we can set the header like this:
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
This will allow any domain to access the API and specify the allowed HTTP methods and headers.
*/
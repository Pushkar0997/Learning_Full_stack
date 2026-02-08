// Routing the req object

import http from 'node:http'

const PORT = 8000


const server = http.createServer( (req, res)=> {

    console.log(req.url)
    // the url property on the req object contains the path of the request.
    // We can use this to route our requests and serve different content based on the path.
    // Currently it is giving just a slash because we are making a request to the root of our server. If we make a request to /api, it will give us /api.
// We can use this to serve different content based on the path. For example, we can check if the url is /api and only serve our string if it is.
    
/*
Challenge:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/api’.
*/
    if (req.url === '/api') {
    res.end('This is from the server')
  }

/*
Challenge: 
1. Check the ‘method’ property on the req object.
   Only serve our string if it’s ‘GET’. 
*/
  if (req.url === '/api' && req.method === 'GET') {
    res.end('This is from the server')
  }

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

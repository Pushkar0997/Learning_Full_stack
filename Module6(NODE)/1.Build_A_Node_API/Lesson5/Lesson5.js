// Recap

import http from 'node:http'

const PORT = 8000


const server = http.createServer( (req, res)=> {
  res.write('This is some data \n')
  res.write('This is some more data \n')
  res.end('This is from the server', 'utf8', ()=> console.log('response end'))
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

// Theory written in the notebook will include them here later.
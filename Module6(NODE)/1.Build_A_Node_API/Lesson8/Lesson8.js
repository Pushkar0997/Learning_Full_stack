// Aside: Json and API

import http from 'node:http'

const PORT = 8000

const animal = {
  type: 'elephant',
  nickName: 'Elon Tusk'
}

console.log(typeof JSON.stringify(animal))


const server = http.createServer((req, res) => {
  
  if (req.url === '/api' && req.method === 'GET') {
    res.end('This is from the server')
  }

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

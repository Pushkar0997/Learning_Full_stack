// Getting the JSON data

// from now on I will use lesson12 as the main folder for all the work related to the paranormal activities app

/*
Here we create a getData() inside our server which we are exporting from a separate file. This function will read the data from the json file, parse it and return it as a JS object. We will use this function to get the data from the json file and send it to the client when requested.
We will be using JSON data in our app, so we need to be able to read it and parse it to JS objects. This is what getData() will do for us. It will read the data from the json file, parse it and return it as a JS object. We will use this function to get the data from the json file and send it to the client when requested.


at the end of this lesson the server fiel will be :
 
 
import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'

const PORT = 8000

const __dirname = import.meta.dirname

console.log(await getData())

const server = http.createServer(async (req, res) => {


    await serveStatic(req, res, __dirname)
}) 

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
 
*/
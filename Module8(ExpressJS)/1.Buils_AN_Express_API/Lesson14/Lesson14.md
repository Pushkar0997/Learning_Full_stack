# Route Not Found

Here, we will tackle the issue of handling requests to endpoints that are not defined in our application. When a client makes a request to an endpoint that does not exist, we want to return a 404 status code along with a message indicating that the endpoint was not found.

Challenge:
1. If a client uses an unknown route, serve this JSON 

{ message: "Endpoint not found. Please check the API documentation." }

Remember to serve an error code!

Test:
http://localhost:8000/wrong-api/useless/user

```javascript
import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'

const PORT = 8000

const app = express()

app.use('/api', apiRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})


app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
```
Here, we have added a catch-all route at the end of our route definitions. This route will be executed if none of the previous routes match the incoming request. We set the status code to 404 to indicate that the resource was not found, and we return a JSON response with a message to inform the client about the error. This way, when a client makes a request to an undefined endpoint, they will receive a clear and informative response instead of just an empty response or a generic error message.
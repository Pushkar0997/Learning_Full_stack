# express.Router()

`express.Router()` is a powerful feature in Express.js that allows you to create modular, mountable route handlers. It helps in organizing your routes and separating them into different files or modules, making your code cleaner and more maintainable.

We will be using 2 keywords quite commonly when working with express.Router():
1. `route`: This is used to define a route for a specific HTTP method (GET, POST, etc.) and a specific path. It allows you to specify the handler function that will be executed when a request matches the defined route.
This is the route part:
"api/products'

2. `Controller`: This is a function that contains the logic for handling a specific route. It is responsible for processing the request, performing any necessary operations (like database queries), and sending a response back to the client.
This is the controller part:  
{
   res.json({data: 'products'})
}

To use `express.Router()`, you typically create a new router instance, define your routes and their corresponding controllers on that router, and then export the router to be used in your main application file.

SO our this code can be go from this:
```javascript
import express from 'express'

const app = express()


app.get('/api/products', (req, res) => {
    res.json({data: 'products'})
})

app.get('/api/services', (req, res) => {
    res.json({data: 'service'})
})

app.listen(8000, () => console.log('listening 8000'))
```

To this:
```javascript
import express from 'express'

const app = express()

const apiRouter = express.Router()

const productsController = (req, res) => {
    res.json({data: 'products'})
}

const servicesController = (req, res) => {
    res.json({data: 'service'})
}

apiRouter.get('/products', productsController)

apiRouter.get('/services', servicesController)

app.use('/api', apiRouter)

app.listen(8000, () => console.log('listening 8000'))
``` 

Here , we have created a new router instance using `express.Router()`. We defined two controller functions, `productsController` and `servicesController`, which handle the logic for the `/products` and `/services` routes, respectively. We then used the `get` method on the router to define the routes and associate them with their respective controllers. Finally, we used `app.use('/api', apiRouter)` to mount the router on the `/api` path, meaning that all routes defined in `apiRouter` will be prefixed with `/api`.

This approach allows us to keep our route definitions and their corresponding logic organized and modular, making it easier to maintain and scale our application as it grows.

THis can be further improved by separating the controllers into a different file and importing them into our router file, which is a common practice in larger applications to keep the codebase organized.

```JavaScript
import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'

const app = express()

app.use('/api', apiRouter)

app.use((req, res) => {
    res.status(404).json({message: 'Endpoint not found'})
})

app.listen(8000, () => console.log('listening 8000'))
```

Here we have imported the `apiRouter` from a separate file (`./routes/apiRoutes.js`) and used it in our main application file. We also added a catch-all route at the end to handle any requests that do not match our defined routes, returning a 404 status code and a JSON response indicating that the endpoint was not found. This helps improve the user experience by providing clear feedback when an invalid endpoint is accessed.


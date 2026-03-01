# Wire up the Dropdown

Challenge:
1. Detect if a query string ‘genre’ is used. 
   If it is, retrieve only products with that genre from the database and serve them. 
   If not, all products should be served.

Example incoming query: '?genre=rock'

Inside `productsController.js` our code will look like this:

```js
export async function getProducts(req, res) {

  try {

    const db = await getDBConnection()

    let query = 'SELECT * FROM products'
    let params = []

    const { genre } = req.query

    if (genre) {
      query += ' WHERE genre = ?'
      params.push(genre)
    }
 
    const products = await db.all(query, params)
    res.json(products)


  } catch (err) {

    res.status(500).json({error: 'Failed to fetch products', details: err.message})

  }

}
```
Explanation of the code:
1. We define an asynchronous function `getProducts` that takes in the request and response objects as parameters.
2. We establish a connection to the database using the `getDBConnection()` function.    
3. We define a SQL query as a string to select all records from the `products` table and store it in a variable called `query`. We also initialize an empty array `params` to hold any parameters for the SQL query.
4. We extract the `genre` parameter from the query string of the incoming request using destructuring assignment.
5. We check if the `genre` parameter exists. If it does, we modify the SQL query to include a WHERE clause that filters products by the specified genre, and we add the genre value to the `params` array.
6. We execute the SQL query using the `db.all()` method, passing in the query and the parameters. This returns an array of matching records from the `products` table, which we store in the `products` variable.
7. We send the `products` array as a JSON response to the client using `res.json(products)`.
8. If any error occurs during the database operations, we catch the error and send a JSON response with a status code of 500 and an error message indicating that fetching products failed, along with the error details.
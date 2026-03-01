# Populate the Dropdown

Challenge:

1. Get all distinct genres (no repeats) from the products table.

  - Our front end code is expecting an array of genres as strings, but you will likely get an array of objects from the database. Find a solution to that!

2. Serve the array of genres and open up the mini browser to check the dropdown is populated.

Inside `productsController.js` our code will look like this:

```js
    const db = await getDBConnection()

    const genreRows = await db.all('SELECT DISTINCT genre FROM products')
    const genres = genreRows.map(row => row.genre)
    res.json(genres)
```
explanation of the code:
1. We establish a connection to the database using the `getDBConnection()` function.
2. We execute a SQL query to select distinct genres from the products table using `db.all()`. This will return an array of objects, where each object has a `genre` property.
3. We use the `map()` method to create a new array called `genres` that contains only the genre strings by extracting the `genre` property from each object in the `genreRows` array.
4. Finally, we send the `genres` array as a JSON response to the client using `res.json(genres)`. This will allow the front end to receive the array of genres and populate the dropdown accordingly.
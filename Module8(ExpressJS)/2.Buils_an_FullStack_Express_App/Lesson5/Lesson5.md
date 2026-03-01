# Setting up the Database

Challenge:
1. Create a database and store its connection in a const 'db'.  
      The database will live in a file called 'database.db' which can be in root.
      The database driver will be 'sqlite3.Database'.
2. Use the exec() method to write SQL to create a table called 'products'. It should have the following columns:
      id (unique key) 
      title (required, text)  
      artist (required, text) 
      price (required, floating-point number)
      image (required, text) (this is "text" because it will hold an image url)
      year (integer)
      genre (text)
      stock (integer)
3. Close the database connection and log a message to say table created.

When you are done, run createTable.js and then logTable.js to verify that it has worked.
  
hint.md for help!

our `server.js` file will look like this:

```js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function createTable() {

      const db = await open({
            filename: path.join('database.db'),
            driver: sqlite3.Database
      })


      await db.exec(`
      CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,  
            artist TEXT NOT NULL, 
            price REAL NOT NULL,
            image TEXT NOT NULL, 
            year INTEGER,
            genre TEXT,
            stock INTEGER
            )
      `)

      await db.close()
      console.log('Table created')
}

createTable()
```
Here we are using the `open()` method from the `sqlite` package to create a connection to our database. We specify the filename and driver for our database. Then we use the `exec()` method to execute a SQL command that creates a table called 'products' with the specified columns. Finally, we close the database connection and log a message to confirm that the table has been created.  
To verify that the table has been created, you can create a separate file called `logTable.js` with the following code:

```js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewAllProducts() {
  const db = await open({
    filename: path.join('database.db'), 
    driver: sqlite3.Database
  });

  try {
    const products = await db.all('SELECT * FROM products')
    console.table(products) 
  } catch (err) {
    console.error('Error fetching products:', err.message)
  } finally {
    await db.close()
  }
}

viewAllProducts()
```
This code connects to the same database, runs a SQL query to select all records from the 'products' table, and logs the results in a table format. If there are any errors during the process, it will catch and log the error message. Finally, it ensures that the database connection is closed.
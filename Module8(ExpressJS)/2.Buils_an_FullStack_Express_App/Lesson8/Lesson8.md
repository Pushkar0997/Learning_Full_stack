# SeedTable

Now we will add some data to a database. We have all the data that we want to add as objects in an array in a file called `data.js`. We will create a new file called `seedTable.js` to add the following code to the database from the `data.js` file:

Challenge:
1. Take the data 'vinyl' imported from data.js and add it to our database.
    The keys in the objects align with the columns in our database.
    The 'id' column in the database will self-populate - you do not need to do anything.

2. If something goes wrong, rollback the process so no data is added.

3. Run seedTable.js and then logTable.js to check.

hint.md for help!


```js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { vinyl } from './data.js'

async function seedTable() {
 
  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database
  })
  try {

    await db.exec('BEGIN TRANSACTION')

    for (const { title, artist, price, image, year, genre, stock } of vinyl) {

      await db.run(`
        INSERT INTO products (title, artist, price, image, year, genre, stock)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [title, artist, price, image, year, genre, stock]
        )

    }

    await db.exec('COMMIT')
    console.log('All records inserted successfully.')

  } catch (err) {

    await db.exec('ROLLBACK')
    console.error('Error inserting data:', err.message)

  } finally {

    await db.close()
    console.log('Database connection closed.')
    
  }
}

seedTable()
```
Explanation of the code:
1. We import the necessary modules: `sqlite3`, `open` from `sqlite`, `path`, and the `vinyl` array from the `data.js` file.
2. We define an asynchronous function `seedTable()` that will handle the database operations. 
3. We establish a connection to the database using the `open()` method, specifying the filename and driver.
4. We start a transaction using `BEGIN TRANSACTION` to ensure that all insertions are treated as a single unit of work.
5. We loop through each object in the `vinyl` array and execute an INSERT statement for each record using the `db.run()` method, passing the title, artist, price, image, year, genre, and stock as parameters.
6. If all insertions are successful, we commit the transaction using `COMMIT`. If any error occurs, we catch the error and roll back the transaction using `ROLLBACK` to maintain data integrity.
7. Finally, we close the database connection in the `finally` block to ensure it happens regardless of whether an error occurred or not. We also log messages to indicate the success or failure of the operations.
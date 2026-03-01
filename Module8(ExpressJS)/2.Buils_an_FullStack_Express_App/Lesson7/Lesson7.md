# Aside : Adding Data to the Database

Now we will add some data to a database. We have all the data that we want to add as objects in an array in a file called `abductionsData.js`. We will create a new file called `seedTable.js` to add the following code to the database from the `abductionsData.js` file:

```js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { abductionsData } from './abductionsData.js'

async function seedTable() {

  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database
  })

  try {

    await db.exec('BEGIN TRANSACTION')

    for (const {location, details} of abductionsData) {
      await db.run(
        `INSERT INTO abductions (location, details)
        VALUES (?, ?)`,
        [location, details]
      )
    }
    
    await db.exec('COMMIT')
    console.log('All records inserted')

  } catch (err) {

    await db.exec('ROLLBACK')
    console.log('Error inserting data', err.message)

  } finally {

    await db.close()
    console.log('connection closed')

  }

}

seedTable()
```
In this code, we are using the `open()` method to create a connection to our database and then we are using a transaction to insert multiple records into the `abductions` table. We loop through the `abductionsData` array and use the `db.run()` method to execute an INSERT statement for each record. If any error occurs during the insertion, we roll back the transaction to ensure data integrity. Finally, we close the database connection.

Explanation of the code:
1. We import the necessary modules: `sqlite3`, `open` from `sqlite`, `path`, and the `abductionsData` array from the `abductionsData.js` file.
2. We define an asynchronous function `seedTable()` that will handle the database operations.
3. We establish a connection to the database using the `open()` method, specifying the filename and driver.
4. We start a transaction using `BEGIN TRANSACTION` to ensure that all insertions are treated as a single unit of work.
5. We loop through each object in the `abductionsData` array and execute an INSERT statement for each record using the `db.run()` method, passing the location and details as parameters.
6. If all insertions are successful, we commit the transaction using `COMMIT`. If any error occurs, we catch the error and roll back the transaction using `ROLLBACK` to maintain data integrity.
7. Finally, we close the database connection in the `finally` block to ensure it happens regardless of whether an error occurred or not. We also log messages to indicate the success or failure of the operations.

And our database is now seeded with the data from the `abductionsData.js` file! You can verify this by running the `logTable.js` file we created earlier to see the inserted records in the console. The code in `logTable.js` will fetch all records from the `abductions` table and display them in a tabular format in the console.

```js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'


export async function viewAllProducts() {
  const db = await open({
    filename: path.join('database.db'), 
    driver: sqlite3.Database
  })

  try {
    const abductions = await db.all('SELECT * FROM abductions')
    const itemsToDisplay = abductions.map(({location, details}) => {
      return {location, details: details.substring(0, 50)}
    })
    console.table(itemsToDisplay) 
  } catch (err) {
    console.error('Error fetching products:', err.message)
  } finally {
    await db.close()
  }
}

viewAllProducts()
```
Explanation of the code:
1. We import the necessary modules: `sqlite3`, `open` from `sqlite`, and `path`.
2. We define an asynchronous function `viewAllProducts()` that will handle the database operations. 
3. We establish a connection to the database using the `open()` method, specifying the filename and driver.
4. We execute a SQL query to select all records from the `abductions` table using the `db.all()` method, which returns an array of all matching records.
5. We map over the retrieved records to create a new array `itemsToDisplay` that contains only the `location` and a truncated version of the `details` (first 50 characters) for better readability in the console.
6. We log the `itemsToDisplay` array in a tabular format using `console.table()`.
7. If any error occurs during the database operations, we catch the error and log an appropriate message. Finally, we ensure that the database connection is closed in the `finally` block to prevent any potential memory leaks or connection issues.


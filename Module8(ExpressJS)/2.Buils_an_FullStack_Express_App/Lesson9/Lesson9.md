# Aside : Getting our Data

We will try to get and display our data

```js
    const abductions = await db.all(`SELECT * FROM abductions WHERE location="Exeter"`)
    console.log(abductions)
```

This method will return an array of objects, where each object represents a row from the `abductions` table that matches the specified location. Each object will have properties corresponding to the columns in the table, such as `id`, `location`, and `details`.  
But this is quite hard coded and it is prone to sql injection. We can make it more dynamic and secure by using parameterized queries like this:

```js
    const query = 'SELECT * FROM abductions WHERE location = ?'
    const params = ['Roswell']

    const abductions = await db.all(query, params)
    console.log(abductions)
```
Now we can easily change the location by modifying the `params` array, and it will also prevent SQL injection attacks by treating the parameters as data rather than executable code.


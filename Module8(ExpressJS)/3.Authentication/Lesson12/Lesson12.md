# Display a User's Name

You need to know about `/auth/me` endpoint to display a user's name on the frontend. This endpoint returns the authenticated user's information, including their name, email, and other details.

The `me` endpoint is typically used to fetch the current user's data after they have logged in. You can make a GET request to `/auth/me` to retrieve this information.  
Apart from this we also have `me.js` and `meController.js` files in the controllers folder which are responsible for handling the logic related to fetching the authenticated user's information and sending it back to the client.

To display a user's name on the frontend, you can follow these steps:
1. After the user logs in, make a GET request to the `/auth/me` endpoint to fetch their information.
2. Extract the user's name from the response data.
3. Display the user's name in the desired location on the frontend, such as a welcome message or a user profile section.

Inside the `meController.js` file, you will find the logic to handle the request to the `/auth/me` endpoint. It typically checks if the user is authenticated, retrieves their information from the database, and sends it back in the response.

Challenge:
  1. If no userId is attached to the session, end the response with the following JSON:
  { isLoggedIn: false }
  2. If the session has a userId, connect to the DB and get the user's name.
  3. End the response with the following JSON:
  { isLoggedIn: true, name: <user's name here> }


```Js
if (!req.session.userId) {

      return res.json({ isLoggedIn: false })
      
    }

    const user = await db.get('SELECT name FROM users WHERE id = ?', [req.session.userId])

    res.json({ isLoggedIn: true, name: user.name})
```
In this code snippet, we first check if there is a `userId` attached to the session. If there isn't, we return a JSON response indicating that the user is not logged in. If there is a `userId`, we connect to the database and retrieve the user's name using a SQL query. Finally, we return a JSON response indicating that the user is logged in and include their name in the response.

And the complete code for `meController.js` would look like this:

```Js
import { getDBConnection } from '../db/db.js'

export async function getCurrentUser(req, res) {
  try {
    const db = await getDBConnection()

    if (!req.session.userId) {

      return res.json({ isLoggedIn: false })
      
    }

    const user = await db.get('SELECT name FROM users WHERE id = ?', [req.session.userId])

    res.json({ isLoggedIn: true, name: user.name})

} catch (err) {
    console.error('getCurrentUser error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
} 
```
This code defines the `getCurrentUser` function, which is responsible for handling the request to the `/auth/me` endpoint. It checks if the user is authenticated by looking for a `userId` in the session. If the user is not authenticated, it returns a JSON response indicating that the user is not logged in. If the user is authenticated, it retrieves their name from the database and returns a JSON response indicating that the user is logged in along with their name. If there is an error during this process, it logs the error and returns a 500 Internal Server Error response.
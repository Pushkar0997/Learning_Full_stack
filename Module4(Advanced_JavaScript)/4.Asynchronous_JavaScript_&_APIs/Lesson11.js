// Taking APIs to Next Level

// We will be using the Json Placeholder API for the examples in this lesson.
// It is a free online REST API that you can use whenever you need some fake data.
// It can be used for testing and prototyping.

/**
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoints: /posts, /comments, /albums, /photos, /todos, /users
Challenge:
1. Make a Fetch request to the /posts endpoint of the Json Placeholder API.
Remember to handle any potential errors that may occur during the request.
2. If the request is successful, parse the JSON response and log the titles of all posts to the console.
3. If the request fails, log an error message to the console indicating that the request was unsuccessful.
 */

async function fetchPosts() {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', { method: 'GET' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.forEach(post => console.log(post.title));
    } catch (err) {
        console.error('Fetch error:', err);
    } finally {
        console.log('Fetch attempt finished.');
    }}
fetchPosts();

/**
There are various methods of an API:
- GET: To retrieve data from the server.
- POST: To send new data to the server.
- PUT: To update existing data on the server.
- DELETE: To remove data from the server.
- PATCH: To make partial updates to existing data on the server.
and others.

So our fetch request by default is a GET request.
We can specify other methods using the second parameter of the fetch function.

Example of a POST request:
async function createPost() {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}
createPost();
In the above code, we define an asynchronous function createPost that sends a POST request 
to the /posts endpoint of the Json Placeholder API.
We specify the method as 'POST' in the second parameter of the fetch function. We also 
set the Content-Type header to 'application/json'
to indicate that we are sending JSON data in the request body. The body property contains
 the data we want to send, which is stringified using JSON.stringify.
If the request is successful, we parse the JSON response and log the created post to the 
console. If the request fails, we log an error message to the console.

Whenever we are sending data to the server using POST, PUT, or PATCH methods,
it is important to set the appropriate headers and stringify the data before sending it.

We create a body object with the data we want to send, and then use JSON.stringify to 
convert it to a JSON string.
This is necessary because the server expects the data to be in JSON format.
*/
// response.ok

// This is another important property of the response object.
// It is a boolean value that indicates whether the response was successful
// (status in the range 200-299) or not.
// If the response was successful, response.ok will be true.
// If the response was not successful, response.ok will be false.
// This is useful for handling HTTP errors that do not result in a rejected promise.
// For example, if we try to fetch data from a non-existent endpoint,
// the fetch promise will be fulfilled, but the response status will be 404 Not Found.
// In such cases, we can check the response.ok property to determine if the request was successful.

// response is an object inside fetch and it has a property called ok which is a boolean 
// and it indicates whether the HTTP request was successful (status code 200-299) or not.
/*
Status Code Basics:
- 1xx: Informational responses
- 2xx: Successful responses -- 200-299: True
- 3xx: Redirection messages
- 4xx: Client error responses -- 404: Not Found, 400: Bad Request: False
- 5xx: Server error responses : 500: Internal Server Error: False
*/
try{
    const response = await fetch('https://apis.scrimba.com/bored/ap/activity');
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
}catch(err){
    console.error('Fetch error:', err);
    // update the DOM to show an error message to the user
    // access an alternate API endpoint
}finally{
    console.log('Fetch attempt finished.');
}
/*
The above code demonstrates how to use the response.ok property to check if the fetch request was successful.
If the response.ok is false, we throw an error that is caught in the catch block.
But there is a problem with the above code. The response.ok works fine if the base url is broken.
But if the endpoint is broken then also the response.ok will be true because the server is reachable.
So to handle such cases, we need to check the response.status property as well.
The response.status property contains the HTTP status code of the response.
We can check if the status code is in the range of 200-299 to determine if the request was successful.
*/

try{
    const response = await fetch('https://apis.scrimba.com/bored/api/activity'); // broken endpoint
    if(!response.ok || response.status < 200 || response.status >= 300) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
}catch(err){
    console.error('Fetch error:', err);
    // update the DOM to show an error message to the user
    // access an alternate API endpoint
}finally{
    console.log('Fetch attempt finished.');
}

/*
In the above code, we check both the response.ok property and the response.status property to determine if the request was successful.
If either of them indicates that the request was not successful, we throw an error that is caught in the catch block.
This way, we can handle both cases where the base url is broken and where the endpoint is broken.

The difference between response.ok and checking the status code directly is that response.ok is a shorthand way of checking
if the status code is in the range of 200-299. However, checking the status code directly gives us more control and allows us
to handle specific status codes if needed.
*/
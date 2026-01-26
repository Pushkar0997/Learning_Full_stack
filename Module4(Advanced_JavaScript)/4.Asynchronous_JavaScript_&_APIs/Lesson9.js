// Handling Rejected Promises with .catch()

// fetch ('https://apis.scrimba.com/dog.ceo/api/breeds/image/random' )
//     .then(response => response.json())
//     .then(data => console.log(data))


function print(msg){
    console.log(msg);
}

/*
Suppose if i mess up with the url like below
fetch ('https://apis.scrimba.com/dog.ceo/api/breeds/image/randoms' )
    .then(response => response.json())
    .then(data => console.log(data))

We will get an error in the console like this:
Access to fetch at 'https://apis.scrimba.com/dog.ceo/api/breeds/image/randoms' from origin 'https://scrimba.com' has been
blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response 
serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

This is because the url is incorrect. And we get a decriptive error message if we see in browser console.
And this was an unhandled promise rejection.

We should always handle such errors when working with promises.
So to handle such errors we can use .catch() method.
As it can help to run some other code if the promise is rejected. Or when the server is down or something else goes wrong. 
We can go to any other api so use some default data or something else.

So we can add .catch() method at the end of the promise chain like below:
fetch ('https://apis.scrimba.com/dog.ceo/api/breeds/image/randoms' )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("Something went wrong: " + err.message))
*/

// fetch ('https://apis.scrimba.com/dog.ceo/api/breeds/image/random' )
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log("Something went wrong: " + err.message))
//     .finally(() => console.log("Fetch attempt finished."))

// We can also use try and catch block with async-await to handle such errors with async await.

try {
    fetch ('https://apis.scrimba.com/dog.ceo/api/breeds/image/random' )
    const data = await response.json()
    console.log(data)
}
catch (err) {
    console.log("Something went wrong: " + err.message)
}
finally {
    console.log("Fetch attempt finished.")
}

function print(msg){
    console.log(msg);
}

// The finally block will run regardless of whether the promise is fulfilled or rejected.
// The above code needs to be inside an async function to use await.
// Otherwise it will throw a syntax error. Cause we need to be inside module 
// or async function to use await.
// So we can wrap it inside an async function like below:

async function fetchDogImage() {
    try {
        const response = await fetch ('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' )
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
        console.log("Something went wrong: " + err.message)
    }
    finally {
        console.log("Fetch attempt finished.")
    }
}

fetchDogImage();

// Suppose we break the base url like above.
// We will get the error message in the catch block.
// Something went wrong: Failed to fetch
// Fetch attempt finished.
// This is how we can handle rejected promises using .catch() method
// or try-catch block with async-await.
// But what if we break the endpoint instead of the base url?
// we will see that the catch block is not executed.
// This is because the fetch promise is fulfilled as the server is reachable.
// But the response status is 404 Not Found.
// So to handle such cases we need to check the response.ok property
// before parsing the response data.
// If response.ok is false then we can throw an error to be caught in the catch block.
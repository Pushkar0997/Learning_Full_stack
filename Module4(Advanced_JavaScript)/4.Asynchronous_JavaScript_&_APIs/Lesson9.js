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

fetch ('https://apis.scrimba.com/dog.ceo/api/breeds/image/random' )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("Something went wrong: " + err.message))
    .finally(() => console.log("Fetch attempt finished."))


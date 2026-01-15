// Promises

//Some theory about Promises in the video lecture.


async function getSuggestion(){
    const response = await fetch('https://apis.scrimba.com/bored/api/activity');
    const data = await response.json();
    console.log(data.activity);
}

getSuggestion();

/*
In the above code, we define an asynchronous function getSuggestion that fetches a random activity suggestion from the Bored API.
It uses the await keyword to wait for the fetch operation and the subsequent conversion of the response to JSON. Finally, 
it logs the activity suggestion to the console.

Why is it necessary to use async/await here?
Using async/await allows us to write asynchronous code in a more synchronous and readable manner. It helps to avoid the 
complexity of chaining multiple .then() calls, making the code easier to understand and maintain. By using await, we can 
pause the execution of the function until the Promise is resolved, allowing us to work with the resolved values directly.

A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its 
resulting value.

A promise can be in one of three states:
1. Pending: The initial state of a promise. The asynchronous operation is still ongoing, and the promise is neither fulfilled 
nor rejected. It is waiting for the operation to complete. Maybe the server is taking time to respond. Or something similar.
2. Fulfilled: The state of a promise when the asynchronous operation completes successfully. The promise is resolved with 
a resulting value.
3. Rejected: The state of a promise when the asynchronous operation fails. The promise is rejected with a reason for the failure.


We have to know how to create promises and how to consume them.

A promise is created using the Promise constructor, which takes a single argument: a callback function known as the 
executor. The executor function is executed immediately when the promise is created and receives two parameters: resolve 
and reject. These parameters are functions that are used to fulfill or reject the promise, respectively.

We can consume promises using the .then() and .catch() methods. The .then() method is used to handle the fulfillment of a 
promise, while the .catch() method is used to handle rejection.

The promise rejection can be handled using the .catch() method, which takes a callback function that is executed when the 
promise is rejected. The .catch() method is used to handle errors that occur during the execution of the asynchronous operation.

Here the asynchronous operation means any operation that takes time to complete, such as fetching data from a server,
reading a file, or performing a complex calculation.
*/


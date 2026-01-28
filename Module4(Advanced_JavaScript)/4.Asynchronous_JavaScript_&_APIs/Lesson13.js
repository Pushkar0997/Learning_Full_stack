// The Promise Constructor: Building our own Async Actions
/*
The fetch function can take a second parameter, an options object, to customize the request.
This object can include properties such as method, headers, body, mode, credentials, etc.
By default, fetch makes a GET request. To make a POST request, we need to specify the method
property in the options object.
*/
/**
When you need to create your own asynchronous actions in JavaScript, you can use the Promise 
constructor.
Perhaps some resource you need to load that's not coming from a built-in API like fetch.
The Promise constructor allows you to define custom asynchronous operations by providing a 
function that takes two parameters: resolve and reject. Inside this function, you can
perform your asynchronous task and call resolve when the task is successful or reject
when it fails.

 */

const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Simulating success or failure randomly
    setTimeout(() => {
        if (success) {
            resolve('Asynchronous operation completed successfully!');
        } else {
            reject('Asynchronous operation failed.');
        }
    }, 200); // Simulating a .2-second asynchronous operation
})

//promise.then(response => console.log(response))

/*
Resolve and Reject:
- resolve: A function that you call when the asynchronous operation completes successfully.
  It can take a value as an argument, which will be passed to the next .then() handler.
- reject: A function that you call when the asynchronous operation fails. It can take an error 
  message or object as an argument, which will be passed to the next .catch() handler.
*/

try{
    const result = await promise;
    console.log(result);
}catch(err){
    console.error(err);
}
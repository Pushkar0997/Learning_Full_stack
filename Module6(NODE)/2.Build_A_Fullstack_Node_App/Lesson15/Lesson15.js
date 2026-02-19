// Incoming Body Parse

/*
Here we are back to our retrotech app 
we create a new page for subscibe to our newsletter, this page will have a form that will allow the user to enter their email and subscribe to our newsletter. We will handle the form submission on the server side and add the email to our dataset.

To handle the form submission, we will need to parse the incoming body of the POST request. We will create a new function called parseJSONBody() in our routeHandlers.js file, this function will collect and parse the incoming JSON data from the request body.

all the data from the client side goes to server as chunks of data, so we need to collect these chunks and then parse them to get the actual data. This is what parseJSONBody() will do for us.
but we don't ned to worry about this as tcp protocol will take care of this for us, we just need to listen to the 'data' event on the request object and collect the data chunks until we get the 'end' event, which indicates that we have received all the data.

This process is asynchronous, as we are getting chunks of data over time, so we will use a promise to handle this asynchronous process. The parseJSONBody() function will return a promise that resolves with the parsed JSON data once we have received all the data.
and we will parse it in a try catch block to handle any errors that may occur during the parsing process.


*/
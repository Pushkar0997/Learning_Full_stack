// Sanitize the input

// We are just sanitizing the input to prevent XSS attacks. We are using the sanitize-html library to sanitize the input. This library removes any HTML tags and attributes that are not allowed, and returns a sanitized string. We can use this library to sanitize user input before storing it in the JSON file or sending it to the client. This will help prevent XSS attacks and ensure that our app is secure.
/*
We create new file called sanitizeInput.js in the utils folder, and we will use the sanitize-html library to sanitize user input. We will export a function called sanitizeInput which takes a string as an argument and returns a sanitized string. We will use this function to sanitize user input before storing it in the JSON file or sending it to the client.
and then we will import this function in routeHandler.js and use it to sanitize user input before storing it in the JSON file or sending it to the client. This will help prevent XSS attacks and ensure that our app is secure.

*/
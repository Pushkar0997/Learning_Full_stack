// Aside: Sanitization

/*
Sanitization is the process of cleaning and validating user input to prevent security vulnerabilities, such as SQL injection, cross-site scripting (XSS), and other types of attacks.

XSS attacks occur when an attacker injects malicious scripts into web pages viewed by other users. This can lead to unauthorized access to sensitive information, session hijacking, and other security issues.

To prevent XSS attacks, it's important to sanitize user input by removing or encoding any potentially harmful characters or scripts. This can be done using various libraries and techniques, such as:
*/

import sanitizeHtml from 'sanitize-html'


console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>'))
console.log(sanitizeHtml('strong: <strong>I am in a strong tag</strong>'))
console.log(sanitizeHtml('p: <p>I am in a p tag</p>'))
console.log(sanitizeHtml('style: <style>I am in a style tag</style>'))
console.log(sanitizeHtml('script: <script>I am in a script tag</script>'))

/*
Here we are using the sanitize-html library to sanitize user input. The library removes any HTML tags and attributes that are not allowed, and returns a sanitized string. In this example, we are sanitizing different HTML tags, and the output will show that only the allowed tags (h1, strong, p) are preserved, while the disallowed tags (style, script) are removed.
If we run above code we get the following:
h1: <h1>I am in an h1 tag</h1>
strong: <strong>I am in a strong tag</strong>
p: <p>I am in a p tag</p>
style: 
script:

The style and script tags are removed, while the h1, strong, and p tags are preserved. This is how we can use the sanitize-html library to sanitize user input and prevent XSS attacks in our app.
In our app, we can use this library to sanitize user input before storing it in the JSON file or sending it to the client. This will help prevent XSS attacks and ensure that our app is secure.

*/
//If we try this:
console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>',  
    {allowedTags: [], allowedAttributes: {}}))

/*
we get the following output:
I am in an h1 tag

Here we are using the allowedTags and allowedAttributes options to specify that we do not want to allow any HTML tags or attributes. As a result, all HTML tags are removed from the input string, and only the text content is preserved. This is another way to sanitize user input and prevent XSS attacks in our app.
In our app, we can use this approach to sanitize user input before storing it in the JSON file or sending it to the client. This will help prevent XSS attacks and ensure that our app is secure.
and we can do this to allow only certain tags and attributes, for example:
console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>',  
    {allowedTags: ['h1'], allowedAttributes: {}}))

and the output will be:
h1: <h1>I am in an h1 tag</h1>

*/

// If we try this:

// const hacker = {
//  title: 'Dr',
//  surname: 'Evil',
//  location: 'A dark room somewhere'
// }


console.log(sanitizeHtml(hacker))

// We will get nothing because sanitize-html is designed to sanitize strings, not objects. If we want to sanitize the values of the object, we can do it like this:

// we can try somehting like this:
const hacker = {
 title: 'Dr',
 surname: '<script>Evil</script>',
 location: 'A dark room somewhere'
}


console.log(sanitizeHtml(hacker.title))
console.log(sanitizeHtml(hacker.surname))
console.log(sanitizeHtml(hacker.location))

// BUt this is a tedious thing to do and we will see its replacement in the next lesson. We will create a function that will sanitize all the values of the object and return a new object with the sanitized values. This way we can easily sanitize user input before storing it in the JSON file or sending it to the client, and prevent XSS attacks in our app.




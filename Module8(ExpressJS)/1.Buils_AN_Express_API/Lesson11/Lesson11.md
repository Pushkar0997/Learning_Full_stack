# Aside Path Parameters 2

We have a problem currently. If we try to access a field that doesn't exist in the startup data, the application will throw an error. This happens because `startup[field]` returns `undefined` when `field` is not a valid property of the startup object, and calling `.toLowerCase()` on `undefined` throws an error.

Challenge:
1. If the client’s 'field' is not supported, serve this object:
  {message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" }
2. Chain in the .status(<code>) method to set a status code.
	What status code should you set?
3. You might run into an error! Find a solution!

hint.md for help!

**The functionality**  
Get all startups in a given country via api/country/```<country name>```  
Get all startups in a given continent via api/continent/```<continent name>```  
Get all startups in a given industry via api/industry/```<industry name>```

**Test Cases** 

These should work:
  api/country/india
  api/continent/europe
  api/industry/ai

This should return the object given in the challenge above. 
	api/has_mvp/true

```javascript
if (!allowedFields.includes(field)) {
    return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }
```
Here, we first check if the `field` provided in the path parameter is one of the allowed fields (`country`, `continent`, `industry`). If it is not, we return a response with a 400 status code (Bad Request) and a JSON object containing the error message. This prevents the application from throwing an error when an unsupported field is used and provides a clear message to the client about what went wrong.

We are returning this response early using `return` to ensure that the rest of the code in the route handler does not execute when an invalid field is provided.  
Otherwise we will be parsing it as json twice and that will throw an error.


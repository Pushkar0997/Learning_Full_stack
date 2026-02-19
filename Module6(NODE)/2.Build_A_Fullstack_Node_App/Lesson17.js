// Handling POST part 1

/*
In this lesson, we will start handling POST requests. We will create a new function called handlePost() in our routeHandlers.js file. This function will be responsible for handling incoming POST requests to the /sightings endpoint.
we change the name of the rawdata to parsedData in the handlePost function in routeHandlers.js file

We create a new file called addNewSighting.js in the utils folder. This file will contain a function called addNewSighting() which will be responsible for adding a new sighting to the data.json file. This function will take in the new sighting data as an argument, read the existing data from the json file, add the new sighting to the existing data, and then write the updated data back to the json file.

So we did just some changes in the route Handlers file and created a new file for the addNewSighting function. We will be using the parseJSONBody() function that we created in the previous lesson to parse the incoming POST request body.
the code added is:

  try {
    const parsedBody = await parseJSONBody(req)
    await addNewSighting(parsedBody)
    sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
  }

}

Here we are parsing the incoming request body using the parseJSONBody() function. If the parsing is successful, we then call the addNewSighting() function to add the new sighting to the json file. If everything goes well, we send a response back to the client with a status code of 201 (Created) and the new sighting data in the response body. If there is an error at any point in this process (either in parsing the body or adding the new sighting), we catch that error and send a response back to the client with a status code of 400 (Bad Request) and an error message in the response body.



*/
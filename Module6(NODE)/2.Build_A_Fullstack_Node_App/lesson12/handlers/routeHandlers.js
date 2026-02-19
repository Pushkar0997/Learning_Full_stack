// handleGet

import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sightingEvents } from '../events/sightingEvents.js'

export async function handleGet(res) {
  const data = await getData()
  const content = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', content)
} 

/*
Challenge from lesson 13:
1. Export a function called handleGet(). 
2. It should:
   - use getData() to get the data
   - stringify that data
   - use sendResponse() to serve it
   
Open the browser and load the sightings page to see if it works.
*/


//handlePost


export async function handlePost(req, res) {
    try {
    const parsedBody = await parseJSONBody(req)
    const sanitizedBody = sanitizeInput(parsedBody)
    await addNewSighting(sanitizedBody)
    sightingEvents.emit('sighting-added', sanitizedBody)

      sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({ error: err }))
  }



}    
/*
Challenge 22
1. At the top of this file, import the event emitter you have created.
2. Use it to emit a ‘sighting-added’ event. 
   What information does the listener function need?
3. Add a sighting to test!
*/
  
//   try {
//     const parsedBody = await parseJSONBody(req)
//     await addNewSighting(parsedBody)
//     sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))
//   } catch (err) {
//     sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
//   }
// The above was used earlier but now we will sanitize the input before storing it in the JSON file or sending it to the client. This will help prevent XSS attacks and ensure that our app is secure.

/*
try {
    const parsedBody = await parseJSONBody(req)
    const sanitizedBody = sanitizeInput(parsedBody)

    await addNewSighting(sanitizedBody)
    sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
  }

}
The above code was used for Lesson 16 but now we will upload new to add the eventlistener feature to it. So we will emit an event when a new sighting is added and listen for that event to create an alert.
*/

/*
Challenge 16:
  1. Create a const 'rawBody' to store whatever is returned by parseJSONBody()
  2. For now, log 'rawBody'.
  3. Input an entry on the front end to test.
*/



/*
Challenge from lesson14:
  1. Create and export a function called handlePost().
  2. For now, that function can just log 'POST request received'.
*/

// export function handlePost(req, res) {
//   console.log('POST request received')
// } 

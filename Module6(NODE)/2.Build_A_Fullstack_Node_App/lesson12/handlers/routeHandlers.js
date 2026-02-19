// handleGet

import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'

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
    await addNewSighting(parsedBody)
    sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))
  } catch (err) {
    sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
  }

}

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


export function handlePost(req, res) {
  console.log('POST request received')
} 

*/

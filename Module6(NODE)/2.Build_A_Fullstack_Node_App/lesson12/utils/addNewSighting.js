import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from './getData.js'

export async function addNewSighting(newSighting) {

  try { 

    const sightings = await getData()
    sightings.push(newSighting)
    
    const pathJSON = path.join('data', 'data.json')
    
    await fs.writeFile(
      pathJSON,
      JSON.stringify(sightings, null, 2),
      'utf8'
    )
/*
    1. Get the existing data (remember, this will already be a JS array)
    2. Push the new sighting to it
    3. Write data to the file.
    4. Add the new sighting and check out the 'read' page.
    5. Throw an error (in the catch block) if any of 1-3 above fail.
    
    To write data:
    Import fs/promises
    Use the writeFile method with the following:
      - the relative path to the file 
      - The data (what should we do to this data first?)
      - The encoding 'utf8'
    
    Bonus: figure out how to prettify the JSON!
    we can do this by JSON.stringify(sightings, null, 2)
    Here this is how we can add indentation to the JSON string, making it more readable.
    The 'null' is for the replacer function (which we are not using here), and '2' is the number of spaces to use for indentation.
    Remember to uncomment the import statement in routeHandler.js!!
*/
  } catch (err) {
    throw new Error(err)
  }

}

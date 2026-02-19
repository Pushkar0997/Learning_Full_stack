import sanitizeHtml from 'sanitize-html' 

export function sanitizeInput(data) {

  const sanitizedData = {}

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitizedData[key] = sanitizeHtml(value, { allowedTags: ['b'], allowedAttributes: {}})
    } else {
      sanitizedData[key] = value
    }
  }

  return sanitizedData
}

/*
Explanation of the code above in details:
1. We import the sanitize-html library at the top of the file.
2. We define a function called sanitizeInput that takes an object called data as an argument.
3. We create an empty object called sanitizedData to store the sanitized values.
4. We use a for...of loop to iterate over the entries of the data object. For each key-value pair, we check if the value is a string.
5. If the value is a string, we use the sanitizeHtml function to sanitize it. We specify that we want to allow only the <b> tag and no attributes. The sanitized value is then stored in the sanitizedData object with the same key.
6. If the value is not a string, we simply copy it to the sanitizedData object without sanitizing it.
7. Finally, we return the sanitizedData object.

*/
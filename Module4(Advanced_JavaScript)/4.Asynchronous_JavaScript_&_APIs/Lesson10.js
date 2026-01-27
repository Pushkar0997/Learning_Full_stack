// response.ok

// This is another important property of the response object.
// It is a boolean value that indicates whether the response was successful
// (status in the range 200-299) or not.
// If the response was successful, response.ok will be true.
// If the response was not successful, response.ok will be false.
// This is useful for handling HTTP errors that do not result in a rejected promise.
// For example, if we try to fetch data from a non-existent endpoint,
// the fetch promise will be fulfilled, but the response status will be 404 Not Found.
// In such cases, we can check the response.ok property to determine if the request was successful.
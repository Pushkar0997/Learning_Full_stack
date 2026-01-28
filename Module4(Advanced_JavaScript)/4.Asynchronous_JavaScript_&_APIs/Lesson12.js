// API Requests: the body

// when we send data to an API, we often need to include a body in our request
// the body contains the data we want to send, typically in JSON format

// body in itself is an object that we convert to a JSON string using JSON.stringify
// which is quite opposite to response.json() that converts a JSON string to an object
try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
            { method: 'POST',
            body: JSON.stringify({
                title: 'Holiday Night',
                body: 'We spend the night at the beach watching the stars.',
                userId: 101,
            }),
             });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error('Fetch error:', err);
    } finally {
        console.log('Fetch attempt finished.');
    }

// We can improve on this by adding headers to specify the content type
/*
Headers are key-value pairs sent along with the request to provide additional information about the request.
When sending JSON data to an API, it is important to set the Content-Type header to 
'application/json' to inform the server about the format of the data being sent.
This helps the server correctly parse and process the incoming data.

Headers include:
- Extra (meta) information about the request or response.
- Content-Type: Specifies the media type of the resource (e.g., application/json for JSON data).
- Authorization: Contains credentials for authenticating the client with the server.
- Accept: Informs the server about the types of data that can be sent back.
- The type of data being sent in the body of the request.
- THis is not an exhaustive list; there are many other headers used for various purposes.
*/

try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
            { method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Holiday Night',
                body: 'We spend the night at the beach watching the stars.',
                userId: 101,
            }),
             });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error('Fetch error:', err);
    } finally {
        console.log('Fetch attempt finished.');
    }

// without specifuying the Content-Type header, the server may not interpret the body correctly,
// leading to potential errors or unexpected behavior.
// By setting the Content-Type header to 'application/json', we ensure that the server
// understands that the body contains JSON data, allowing it to parse and process the data correctly.

//HOw can be update a resource on an API?
// We can use the PUT or PATCH methods to update existing resources on an API.
// PUT is used to update the entire resource, while PATCH is used for partial updates.
// Aside: Server- Side Events

/*
Server-side events (SSE) is a technology that allows a server to push real-time updates to the client over a single HTTP connection. This is particularly useful for applications that require real-time data, such as chat applications, live sports scores, or in our case, real-time alerts for new sightings.

In our application, we will use SSE to create an alert on the client side whenever a new sighting is added. This will enhance the user experience by providing immediate feedback without the need for the user to refresh the page.

Server- Side events work by establishing a persistent connection between the client and the server. The server can then send updates to the client whenever new data is available. The client listens for these updates and can react accordingly, such as displaying an alert or updating the UI.

To implement SSE in our application, we will follow these steps:
1. Create an event emitter on the server side to emit events when a new sighting is added.
2. Set up a route on the server to handle SSE connections and send updates to the client.
3. On the client side, establish a connection to the SSE endpoint and listen for incoming events to display alerts.
4. Test the implementation by adding new sightings and observing the real-time alerts on the client side.
This will allow us to create a more dynamic and responsive application that provides real-time feedback to users.

Server-Side events:
- Breaking news
- Stock price updates
- Social media notifications
- Real-time alerts for new sightings in our application
- Sports scores and updates
- Chat applications
- Online gaming updates
- Weather updates
- Real time monitoring dashboards

Data flows only in one way, not suitable for chat applications but good for real time updates and notifications.
- Chat apps require bi-directional communication, so WebSockets would be a better choice for that use case.
- Doorbell cams or security systems that send real-time alerts to users when motion is detected or when someone rings the doorbell.
- anything where 2 way communication is not needed but real time updates are important.

it is done as follows:
if (req.url === '/temp/live') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
   
    setInterval( () => {

      const temperature = getTemp()
      res.write(
        `data: ${JSON.stringify({ event: 'temp-updated', temp: temperature})}\n\n`
      )
// \n\n: THis is required to indicate the end of an event in SSE. Each event is separated by a blank line, which is represented by two newline characters (\n\n). This tells the client that a complete event has been sent and it can now process the data.
    }, 2000)
  }

Explanation of the server-side code:
- We check if the incoming request is for the '/temp/live' endpoint. If it is, we set the status code to 200 and set the appropriate headers to indicate that this is an event stream and to prevent caching.
- We then use setInterval to send a new temperature update every 2 seconds. Inside the interval callback, we get the current temperature (using a hypothetical getTemp function) and write it to the response in the format expected by SSE. The data is sent as a JSON string with an event name and the temperature value.
- The client can then listen for these events and update the UI accordingly, providing real-time updates to the user without the need for them to refresh the page.
- On the client side, we can establish a connection to this endpoint using the EventSource API:

const eventSource = new EventSource('/temp/live')
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const temperature = data.temp

Here we set up an endpoint at '/temp/live' that clients can connect to for receiving real-time temperature updates. We set the appropriate headers to indicate that this is an event stream and to prevent caching. We then use setInterval to send a new temperature update every 2 seconds by writing data to the response in the format expected by SSE.

On the client side, we can establish a connection to this endpoint using the EventSource API:

const eventSource = new EventSource('/temp/live')
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const temperature = data.temp

  tempDisplay.textContent = temperature
}

eventSource.onerror = () => {
  console.log('Connection failed...')
}

Explaination of the client-side code:
- We create a new EventSource object and pass the URL of the SSE endpoint we want to connect to.
- We set up an event listener for the 'message' event, which is triggered whenever a new event is received from the server. In the event handler, we parse the incoming data and update the UI with the new temperature.
- We also set up an error handler to log any connection issues.
*/
// Add an Event Emitter 

/*
We start by creating a file called createAlert.js in the utils folder. This file will contain a function that creates an alert when a new sighting is added. We will use the EventEmitter class from the 'node:events' module to create and handle custom events.

And we also create a new folder events and inside it we put a file called sightingEvents.js. This file will contain the event emitter for the sightings.

And lastly we will update our routeHandlers.js file to emit an event when a new sighting is added and listen for that event to create an alert.
*/
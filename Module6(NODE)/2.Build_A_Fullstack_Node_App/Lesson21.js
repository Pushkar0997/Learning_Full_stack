// Aside: EventEmitter

/*
EventEmitter is a class in Node.js that allows you to create and handle custom events. It provides a way to emit events and listen for those events in your code. This is particularly useful for handling asynchronous operations and creating a more modular and decoupled codebase.

Events:
An event is a signal that something has happened in your application. For example, when a new sighting is added to our app, we can emit an event called 'sighting-added'. This allows us to perform additional actions whenever a new sighting is added, such as creating an alert or logging the event.
-A user clicks a button
- A file finishes downloading
- A network request is received
- and many more... 

*/

// import EventEmitter
import { EventEmitter } from 'node:events'

const customerDetails = {
  fullName: 'Meryl Sheep',
  email: 'baah@thedevilwearswool.com',
  phone: 12345678910
}

// create the emitter
const emailRequestEmitter = new EventEmitter()

// define the listener function
function generateEmail(customer) {
  console.log(`Email generated for ${customer.email}`)
}

// register the listener
emailRequestEmitter.on('emailRequest', generateEmail)
emailRequestEmitter.on('emailRequest', () => console.log('task assigned'))
emailRequestEmitter.on('emailRequest', () => console.log('email logged'))

// emit the event
setTimeout(()=> {
  emailRequestEmitter.emit('emailRequest', customerDetails)
}, 2000)

/*
Explanation:
1. We import the EventEmitter class from the 'node:events' module.
2. We create an object called customerDetails that contains the details of a customer.
3. We create an instance of the EventEmitter class called emailRequestEmitter.
4. We define a listener function called generateEmail that takes a customer object as an argument and logs a message indicating that an email has been generated for the customer's email address.
5. We register the generateEmail function as a listener for the 'emailRequest' event using the on() method of the emailRequestEmitter instance. We also register two additional listeners that log messages when the 'emailRequest' event is emitted.
6. We use setTimeout to simulate an asynchronous operation and emit the 'emailRequest' event after 2 seconds, passing the customerDetails object as an argument to the listeners.

*/
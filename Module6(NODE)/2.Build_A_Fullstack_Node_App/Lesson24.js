// server-sent Events Chllange

/*
We just use what we learned about event emitters to create a real-time alert system for new sightings. Whenever a new sighting is added, we will emit an event and listen for that event to create an alert on the client side.

we create new file in data folder named stories.js and a new news.html file in the public folder. We will use the stories.js file to store our news stories and the news.html file to display them.

In the stories.js file, we will create an array to store our news stories and a function to add new stories to the array. We will also create an event emitter to emit an event whenever a new story is added.

and we also create new function handleNews in the routeHandlers.js file to serve the news.html file and a new function handleAddStory to handle adding new stories to the stories.js file.

And here our project ends.
*/
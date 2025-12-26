//Callback Function Example
/*
Quiz: list some examples of callback functions in JavaScript.
1. Array methods: map, forEach, reduce
2. setTimeout and setInterval
3. Event listeners (e.g., addEventListener)
4. Promises (then, catch, finally)
*/

//We can say that callback functions are functions that are passed as arguments to other
//functions and are executed after some operation has been completed.

function notifyUser(notificationFn) {
    notificationFn();
}

const emailNotification = () =>
    console.log("You have a new email!");

const smsNotification = () => console.log("You have a new SMS!");

notifyUser(emailNotification);
notifyUser(smsNotification);

function print(msg){
    console.log(msg);
}
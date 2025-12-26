//The Error Constructor

function checkUserName(username){
    if (username){
        console.log(username);
}
    else {
        console.log('I executed');
        throw new Error('Username is required');
        console.log('This will not execute');
    }
}
checkUserName('Pushkar');

function print(msg) {
    console.log(msg)
}

/*
Some constructors in JavaScript for common datatypes:
1. String()- let str = new String('Hello World');
2. Number()- let num = new Number(123);
3. Boolean()- let bool = new Boolean(true);
4. Object()- let obj = new Object({name: 'Pushkar'});
    const person = new Object();
    person.name = 'Pushkar';
    person.age = 26;
    console.log(person);

    Atlernatively,
    const person = {};  This is object literal syntax
    person.name = 'Pushkar';
    person.age = 26;
    console.log(person);
5. Array()- let arr = new Array(1,2,3,4,5);
6. Function()- let func = new Function('a', 'b', 'return a + b;');

*/
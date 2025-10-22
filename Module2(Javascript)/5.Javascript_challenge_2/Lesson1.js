person= {
    name:"Pushkar",
    age: 19,
    country:"India"
}

messageEl= document.getElementById("message-el")
function logData() {
    return person.name + " is " + person.age + " years old and live in " + person.country + "."
}

function showMessage(){
    messageEl.textContent=logData()
}


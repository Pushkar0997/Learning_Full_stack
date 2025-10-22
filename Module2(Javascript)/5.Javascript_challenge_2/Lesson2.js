messageEl= document.getElementById("message-el")

age=Math.floor(Math.random()*100)


function showMessage(){
    if (age<6){
    messageEl.textContent="Free"
}else if (age<18){
    messageEl.textContent="Child Discount"
}else if (age>=18 && age<26){
    messageEl.textContent="Student Discount"
}else if (age>=26 && age<65){
    messageEl.textContent="Full Price"
}else if (age>=65){
    messageEl.textContent="Senior Citizen Discount"
}

    return messageEl.textContent
}

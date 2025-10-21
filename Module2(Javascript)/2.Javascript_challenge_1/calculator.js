num1=8
num2=2

document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2

function add(){
    let result= num1 + num2
    document.getElementById("result").textContent="Result: " + result
}

function subtract(){
    let result= num1 - num2
    document.getElementById("result").textContent="Result: " + result
}

function multiply(){
    let result= num1 * num2
    document.getElementById("result").textContent="Result: " + result
}

function divide(){
    let result = num1/num2
    document.getElementById("result").textContent ="Result: " + result
}
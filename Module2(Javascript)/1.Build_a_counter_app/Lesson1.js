// document.getElementById('count-el').innerText = 5;

// let count = 5;
// //count +1
// count += 1;
// console.log(count)

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

//camelCase
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment(){ 
    count += 1;
    countEl.textContent = count;
    console.log(count)
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
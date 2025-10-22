messageEl= document.getElementById("message-el")

largeCountries= ["Tuluva","India","USA","Indonesia","Monaco"]

function showMessage(){
    for (i=0;i<largeCountries.length;i++){
        messageEl.textContent+=largeCountries[i]
    }
    largeCountries.shift()
    largeCountries.unshift("China")
    largeCountries.pop()
    largeCountries.push('Pakistan')
    for (i=0;i<largeCountries.length;i++){
        messageEl.textContent+=largeCountries[i]
    }
}
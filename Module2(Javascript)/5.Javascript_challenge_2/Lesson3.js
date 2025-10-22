messageEl= document.getElementById("message-el")

largeCountries= ["China","India","USA","Indonesia","Pakistan","Brazil","Nigeria","Bangladesh","Russia","Mexico"]

function showMessage(){
    for (i=0;i<largeCountries.length;i++){
        messageEl.textContent+=largeCountries[i]+ "<br>"
    }
}
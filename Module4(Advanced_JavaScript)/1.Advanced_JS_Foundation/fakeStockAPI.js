function getStockData(){
    return{
        name: "QtechAI",
        sym: 'QTA',
        price: parseFloat((Math.random() * 3).toFixed(2)),
        time : /*Return a timestamp in this format : hh/mm/ss */ new Date().toLocaleTimeString()
    }
}

console.log(getStockData());

function print(msg){
    console.log(msg);
}
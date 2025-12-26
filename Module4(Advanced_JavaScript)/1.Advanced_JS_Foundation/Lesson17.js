//Super Challenge : Build a Stock Ticker App 

//console.log(getStockData);

let prevPrice = null;

// Call immediately on load
const initialData = getStockData();
renderStockTicker(initialData);

setInterval(function(){
    const stockData = getStockData();
    renderStockTicker(stockData);
},1500);

function renderStockTicker(stockData){
    const stockDisplayName = document.getElementById('stock-name');
    const stockDisplaySymbol = document.getElementById('stock-symbol');
    const stockDisplayPrice = document.getElementById('stock-price');
    const stockDisplayPriceIcon = document.getElementById('stock-price-icon');
    const stockDisplayTime = document.getElementById('stock-time');

    const {name, sym, price, time} = stockData;

    const priceDirectionIcon = price > prevPrice ? '▲' : price < prevPrice ? '▼' : '►';
    
    let iconColor = 'grey';
    if (price > prevPrice) {
        iconColor = 'green';
    } else if (price < prevPrice) {
        iconColor = 'red';
    }

    stockDisplayName.innerText = name;
    stockDisplaySymbol.innerText = sym;
    stockDisplayPrice.innerText = price;
    stockDisplayPriceIcon.innerText = priceDirectionIcon;
    stockDisplayPriceIcon.style.color = iconColor;
    stockDisplayTime.innerText = time;
    
    prevPrice = price;
}



/*
App requirements:
- The app should display, name , symbol and price of the stock, with the timestamp of last update.
- The traingle compares the current stock price with the previous stock price. If the current price is higher than the 
   previous price, it should be a green traingle pointing upwards (▲), if lower, it should be a red triangle pointing
    downwards (▼) and if same, it should be a grey traingle pointing to the right (►).
- The price should update every 1.5 seconds .
*/

/*
Challenge:
1. Find a way to refresh the stock data every 1.5 seconds.
2. Call the renderStockTicker function with the updated stock data.
3. Add logic to renderStockTicker function to display the correct indicator based on the previous and current stock price.
   ⚠  You will need to write code here in Lesson17.js and in fakeStockAPI.js
*/



function print(msg){
    console.log(msg);
}
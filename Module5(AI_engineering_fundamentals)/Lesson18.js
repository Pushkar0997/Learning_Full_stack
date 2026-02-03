// Presence and Frequency penalties for AI-generated text

/*
Presence and Frequency penalties are techniques used to influence the diversity and repetitiveness of AI-generated text.
They help in controlling how often certain words or phrases appear in the generated output.

Presence Penalty:
- The presence penalty is a parameter that discourages the model from repeating words or phrases that have already appeared in the generated text.
- It works by assigning a penalty score to words that have already been used, making them less likely to be selected again.
- A higher presence penalty value increases the likelihood of introducing new words and concepts into the output.
- This is particularly useful for generating creative content or when you want to avoid redundancy.
- It typically ranges from -2.0 to 2.0.
- Default is 0.0 (no penalty).
- At lower values, the model may repeat topics more frequently. E.g., a presence penalty of 0.5 encourages some diversity, while a value of 1.5 strongly discourages repetition.
- Example: If the model has already used the word "innovation" in the generated text, a presence penalty will reduce the likelihood of "innovation" being used again.

Frequency Penalty:
- The frequency penalty is a parameter that reduces the likelihood of the model repeating the same word or phrase based on how many times it has already been used in the generated text.
- It assigns a penalty score that increases with the frequency of a word's occurrence, making frequently used words less likely to be selected again.
- A higher frequency penalty value encourages the model to use a wider variety of words and phrases.
- This is useful for generating text that is more varied and less monotonous.
- It typically ranges from -2.0 to 2.0.
- Default is 0.0 (no penalty).
- At lower values, the model may repeat phrases more frequently. E.g., a frequency penalty of 0.5 encourages some diversity, while a value of 1.5 strongly discourages repetition.
- Example: If the word "technology" has been used multiple times in the generated text, a frequency penalty will reduce the likelihood of "technology" being used again.

*/

import { dates } from '/utils/dates'
import OpenAI from "openai"

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    } 
})

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}

const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch (err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}

async function fetchReport(data) {
    const messages = [
        {
            role: 'system',
            content: 'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell. Use the examples provided between ### to set the style your response.'
        },
        {
            role: 'user',
            content: `${data}
            ###
            OK baby, hold on tight! You are going to haate this! Over the past three days, Tesla (TSLA) shares have plummetted. The stock opened at $223.98 and closed at $202.11 on the third day, with some jumping around in the meantime. This is a great time to buy, baby! But not a great time to sell! But I'm not done! Apple (AAPL) stocks have gone stratospheric! This is a seriously hot stock right now. They opened at $166.38 and closed at $182.89 on day three. So all in all, I would hold on to Tesla shares tight if you already have them - they might bounce right back up and head to the stars! They are volatile stock, so expect the unexpected. For APPL stock, how much do you need the money? Sell now and take the profits or hang on and wait for more! If it were me, I would hang on because this stock is on fire right now!!! Apple are throwing a Wall Street party and y'all invited!
            ###
            Apple (AAPL) is the supernova in the stock sky – it shot up from $150.22 to a jaw-dropping $175.36 by the close of day three. We’re talking about a stock that’s hotter than a pepper sprout in a chilli cook-off, and it’s showing no signs of cooling down! If you’re sitting on AAPL stock, you might as well be sitting on the throne of Midas. Hold on to it, ride that rocket, and watch the fireworks, because this baby is just getting warmed up! Then there’s Meta (META), the heartthrob with a penchant for drama. It winked at us with an opening of $142.50, but by the end of the thrill ride, it was at $135.90, leaving us a little lovesick. It’s the wild horse of the stock corral, bucking and kicking, ready for a comeback. META is not for the weak-kneed So, sugar, what’s it going to be? For AAPL, my advice is to stay on that gravy train. As for META, keep your spurs on and be ready for the rally.
            ###
            `
        }
    ]

    try {
        const openai = new OpenAI({
            dangerouslyAllowBrowser: true
        })
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages,
            temperature: 1.1,
            presence_penalty: 0,
            frequency_penalty: 0
        })
        renderReport(response.choices[0].message.content)

    } catch (err) {
        console.log('Error:', err)
        loadingArea.innerText = 'Unable to access AI. Please refresh and try again'
    }
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}

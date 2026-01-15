// Fetch with async/await Challenge

async function getSuggestion(){
    const response = await fetch('https://apis.scrimba.com/bored/api/activity');
    const data = await response.json();
    console.log(data.activity);
}

getSuggestion();

function print(msg){
    console.log(msg);
}
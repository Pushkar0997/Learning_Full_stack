// Fetching with .then()

// https://apis.scrimba.com/dog.ceo/api/breeds/image/random

fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => {response.json()})
    .then(data =>
    {
        const imageElement = document.createElement('img')
        imageElement.src = data.message
        imageElement.alt = "A Random Dog"
        document.getElementById('dog-image-container').appendChild(imageElement)
    }
    )
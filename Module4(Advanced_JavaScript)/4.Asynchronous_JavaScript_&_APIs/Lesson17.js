// Super Challenge: Async Image Load

function getImagePromise(url){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const img = new Image();
            img.src = url;
            img.alt = 'Image';
            img.addEventListener('load', () => resolve(img));
            img.addEventListener('error', () => reject(new Error('Failed to load image at ' + url)));
                }, 500);
    });
}

const images=[
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250'
]

async function preloadImagea(imageUrlArr) {
    const imgContainers = document.getElementById('img-containers');
    const uploadContainer = document.getElementById('upload-container');

    const promises = imageUrlArr.map((url) => getImagePromise(url));

    try{
    const results = await Promise.all(promises);
    console.log('All images loaded successfully');
    uploadContainer.style.display = 'none';
    results.forEach((img) => {
        imgContainers.appendChild(img)
    });
    }catch(err){
     console.error('Error loading images:', err);   
    }

/*
Challenge:
    1. Create an array of promises using getImagePromise for each URL in imageUrlArr.
    2. Save the results of calling all those Promises in one go to a const 'results'.
    3. If the promises resolve:
        - log "All images loaded successfully"
        - hide "upload-container" div by setting its display to 'none'
        - iterrate over the results and append each image to the 'img-containers' div
    4. If any of the promises reject:
        - catch the error and log the error
*/
}

document.getElementById('submit-img').addEventListener('click', () => preloadImagea(images));

/*
In the above code, we define a function getImagePromise that returns a promise which 
resolves when an image is loaded successfully and rejects if there is an error loading
the image.
We then create an array of image URLs and define an async function preloadImagea that
takes an array of image URLs. Inside this function, we create an array of promises using
getImagePromise for each URL.
*/

// Finally, we use Promise.all to wait for all the promises to resolve or any to reject,
// and handle the results accordingly.

// And with this this module comes to an end. 
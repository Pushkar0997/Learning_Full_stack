// Promise : Challenge

function preLoadImg(url){
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.alt = 'Preloaded Image';
        img.addEventListener('load', () => resolve(img));
        img.addEventListener('error', () => reject('Image load failed'));
    })
/**
Challenge:
1. Return a new Promise . The promise should:
- Create a new Image and assign the incoming url to its src attribute.(Use the Image
constructor for this!)
- listen for the load event . If a load event is detected, the promise should resolve , 
providing the image element.
- listen for the error event . If an error event is detected, the promise should reject 
giving the error message 'Image load failed'.
 */


}

try {
    const results = await preLoadImg('https://picsum.photos/200/300');
    console.log('Image loaded successfully:', results);
    document.getElementById('img-container').appendChild(results);
}catch(err){
    console.error(err);
}
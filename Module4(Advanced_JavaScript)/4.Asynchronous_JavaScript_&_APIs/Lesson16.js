// Promises.all

/**
In this we handle multiple promises concurrently using Promise.all.
In this either all promises resolve successfully or if any one of them rejects.
Then the entire Promise.all rejects.
It is neater way to handle multiple asynchronous operations.
 */

function createPromise(){
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // Simulating success or failure randomly
        
            if (success) {
                resolve('Asynchronous operation completed successfully!');
            } else {
                reject('Asynchronous operation failed.');
            }
        
})
}

try {
    const promise1 = createPromise();
    const promise2 = createPromise();
    const promise3 = createPromise();
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log('All promises resolved successfully:', results);
}catch(err){
    console.error('One or more promises failed:', err);
}
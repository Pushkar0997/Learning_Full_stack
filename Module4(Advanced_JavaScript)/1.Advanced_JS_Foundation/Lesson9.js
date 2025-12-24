// Get the starting Timestamp
const start = performance.now();

setTimeout(() => {
    // Get the ending Timestamp
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`); 

},1000
)

// for (let i = 0; i < 1e6; i++) {
//     // Some CPU intensive task
//     let answer = Math.sqrt(i) * Math.random();
// }




//time without slow code execution unit: 1005.3479 milliseconds

function print(msg){
    console.log(msg);
}
//time with slow code execution unit: 1015.5583 milliseconds
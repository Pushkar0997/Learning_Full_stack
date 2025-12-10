const exerciseTime = 20 

// let message = ''
// if (exerciseTime < 15) {
//     message = 'Good job, but try to exercise more.'
// } else if (exerciseTime <= 30) {
//     message = 'Great work! You are maintaining a healthy lifestyle.'
// }
//alternative using ternary operator
let message = exerciseTime < 15 ? 'Good job, but try to exercise more.' 
            : 'Great work! You are maintaining a healthy lifestyle.'

print(message)

function print(msg) {
    console.log(msg)
}
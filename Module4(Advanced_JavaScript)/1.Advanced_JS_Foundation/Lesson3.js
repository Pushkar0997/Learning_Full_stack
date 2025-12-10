const exerciseTime = 20 

// let message = ''
// if (exerciseTime < 15) {
//     message = 'Good job, but try to exercise more.'
// } else if (exerciseTime <= 30) {
//     message = 'Great work! You are maintaining a healthy lifestyle.'
// }else {
//     message = 'Impressive! You are going above and beyond in your fitness routine.'
// }
//alternative using ternary operator
let message = exerciseTime < 15 ? 'Good job, but try to exercise more.' 
            : exerciseTime <= 30 ? 'Great work! You are maintaining a healthy lifestyle.'
            : 'Impressive! You are going above and beyond in your fitness routine.'

print(message)

function print(msg) {
    console.log(msg)
}
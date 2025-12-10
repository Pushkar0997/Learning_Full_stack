const PlayerGuess = 3
const WinningNumber = 7

/*
Challenge
1. Refactor the if else statement using ternary operators
2. If the player's guess matches the winning number, log "Congratulations! You've guessed the correct number."
3. If the player's guess is less than the winning number, log "Too low! Try again."
4. If the player's guess is greater than the winning number, log "Too high! Try again."
*/

let message = PlayerGuess === WinningNumber ? "Congratulations! You've guessed the correct number."
            : PlayerGuess < WinningNumber ? "Too low! Try again."
            : "Too high! Try again."
            
print(message)

function print(msg) {
    console.log(msg)
}
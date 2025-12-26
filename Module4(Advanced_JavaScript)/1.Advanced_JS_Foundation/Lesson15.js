//Numeric Separators & BigInt in JavaScript

// Numeric Separators

//We use underscores (_) as numeric separators to make large numbers more readable
//This does not affect the actual value of the number in any way it just improves readability

const pushkarsBankBalanceGBP = 9_007_199_254_740_991n; // Using numeric separators for better readability
console.log(`Pushkar's Bank Balance: ${pushkarsBankBalanceGBP}`);

function print(msg) {
    console.log(msg)
}

// BigInt
const bigIntNumber = 1234567890123456789012345678901234567890n; // 'n' at the end denotes a BigInt
print(`BigInt Number: ${bigIntNumber}`);

//We can also use the bigint constructor instead of appending 'n' at the end
const anotherBigInt = BigInt("9876543210987654321098765432109876543210");
print(`Another BigInt Number: ${anotherBigInt}`);

// Note: BigInt cannot be used with regular Number types in arithmetic operations directly
const regularNumber = 10;
// const invalidOperation = bigIntNumber + regularNumber; // This will throw an error
const validOperation = bigIntNumber + BigInt(regularNumber); // Convert regular number to BigInt
print(`Valid BigInt Operation Result: ${validOperation}`);

//BIgInt are used for very large integers where precision is crucial, such as in cryptography, scientific computations,
//and financial calculations.
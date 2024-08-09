// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let userInput = prompt("Enter a number:")
const number = Number(userInput)
// Prompt the user for another number that is bigger than the first number and cast it to a number
let secondInput = prompt("Enter another number that is bigger than the first number")

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let x = number; x <= secondInput; x++){
  console.log(x)
}





// PART 2: Averaging an array
// Create an array of numbers 
let NumList = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ]

// Write a for loop that calculates the sum of the elements 
let sum = 0

for(let index = 0;index < NumList.length; index++){
  sum = sum + NumList[index]
}

console.log(`The sum is ${sum}.`)

// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let average = sum / NumList.length

console.log(`The average is ${average}.`)


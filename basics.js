"use strict"  // promote good habits (foundation)
// First programm
// console.log("Hello world!")
// console.log("Hi, how are you?")


// Variables
// let x  // (initialisation or init) block in our memory
// x = "Hi, how are you?"  // 'I'm creating a variable I can change.' (declaration)
// let y = 10  // init and declare
// console.log(x)
// x = 1  // (reasignment)
// console.log(x)


// Basic Math
// console.log(2 + 2)  // number type, rules are as in the Math
// console.log(2 - 2)  
// console.log(2 * 2)  
// console.log(2 / 2)  

// let a = 1
// let b = 2
// let formula = a + b
// console.log(formula)

// Challenge
// let myFormula // parameter a, b, c => sum of a and c and summerise with b multiplies c. Then show the result in the console.

// code solution
/* let a = 10
let b = 2
let c = 5
let myFormula = (a + c) + b * c
console.log(myFormula) */


// THIRD EPISODE
// If statements
// let statement = true
// statement = false

//example
// let light = true
// let personInRoom = true

// if (personInRoom === true) {  // common "=" in the math, comparison. true === true => true
//     light = true
// }

// if (personInRoom === false) {  // true === false => false
//     light = false
// }

// if (personInRoom === true) {
//     light = true
// } else {  // if first statement = false, then else statement = true
//     light = false
// }

// Challenge
// let engineWorks = true
// let personInCar = false
// let carLock = false

// // rules. If person in car => turn off the carLock and start the engine. If person Not in the car => turn on the carLock and turn off the engine. If engineWorks => type in the console the sentence "Brum-brum. I am ready!"
// // code solution
// if (personInCar === true) {
//     carLock = false
//     engineWorks = true
// } else {
//     carLock = true
//     engineWorks = false
// }

// if (engineWorks) {
//     console.log("Brum-brum. I am ready!")
// }

// console.log(engineWorks, personInCar, carLock)


// FOURTH EPISODE
// alert("Hi user!") - first function
// let usualMessage = alert("You have an error!")

// prompt("Hi I am a prompt!")
// let usersAge = prompt("How old are you?")
// console.log(usersAge)  // "" - emply string

// let userAge = prompt("How old are you?")
// alert(`Your age is: ${userAge}!`)  // alt + 96

// let num1 = 100
// let num2 = 99
// alert(`100 - 99 = ${100 - 99}!`)  // we can do math inside of the fstring

// let userAge = prompt("How old are you?")
// alert(`Your age after 10 years is: ${userAge + 10}!`)  // alt + 96

// //concatination 
// console.log(10 + 55)  // sum in math. Requires (2 numbers), num + num
// console.log("10" + "55") // sum of strings => concationation. Requires (2 strings), string + string
// console.log("10" + 55) // string and number (convert) => string + string
//prompt => string or null (it never returns number)

//How to solve the problem?
// let a = "10"
// let b = 100
// console.log(a + b)
// console.log(parseInt(a) + b)  // parseInt change the string to number
// console.log(parseInt("number") + 10 * 8)  // try to parseInt not valid number => number (NaN) - non a number

// Challenge
// Ask the name and age of a user. Then show in the console the year when the user was been borned.
// Example of the rerult => "Artur was been borned in the 1925 year."

// code solution
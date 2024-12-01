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
//     light = true  // don't use word let accidentally
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

// //concatenation 
// console.log(10 + 55)  // sum in math. Requires (2 numbers), num + num
// console.log("10" + "55") // sum of strings => concatenation. Requires (2 strings), string + string
// console.log("10" + 55) // string and number (convert) => string + string
//prompt => string or null (it never returns number)

//How to solve the problem?
// let a = "10"
// let b = 100
// console.log(a + b)
// console.log(parseInt(a) + b)  // parseInt change the string to number
// console.log(parseInt("number") + 10 * 8)  // try to parseInt not valid number => number (NaN) - non a number

// Challenge
// Ask the name and age of a user. Then if user's age is a number, show the year when the user was been borned with an alert message. Example of the message: Bob was born in 1997. Otherwise show the message "You didn't type your age.". 
// Example of the rerult => "Artur was been borned in the 1925 year."

// // code solution
// let usersName = prompt("Hi! What is your name?")
// let usersAge = prompt("How old are you?")

// //How to calculate the year?
// // Borned: 2001
// // Current age: 23
// // Current year: 2024
// // Borned => Current year - Current age
// let currentYear = 2024
// usersAge = parseInt(usersAge)

// if (usersAge === NaN) {
//     alert("You didn't type your age.")
// } else {
//     let userWasBorn = currentYear - usersAge  // JavaScript automatically change the data type from string to number, because JS doesn't have opiration as (string or number - string)
//     alert(`${usersName} was born in ${usersAge}.`)
// }


// FIFTH EPISODE
//random
// console.log(Math.random() * 25 + 1)
// let roundedNumber = Math.round(Math.random())  // 0-0.4 => 0 and 0.5-0.9 => 1
// console.log(roundedNumber)
// let floorNumber = Math.floor(Math.random())  // 0-0.9 => 0
// console.log(floorNumber)
// let ceilNumber = Math.ceil(Math.random())  // 0-0.9 => 1
// console.log(ceilNumber)

// And, Or signs(&& ||)
// let workerName = "Bob"
// let time = 12
// let isWorking = false  //true or false
// console.log(isWorking)
//Rules. If worker's name is Bob and time is less than 12, then Bob is working.
// if (workerName === "Bob") {  //inconvinient way as we need to write false twice
//     if (time < 12) {
//         isWorking = true
//     } else {
//         isWorking = false
//     }
// } else {
//     isWorking = false
// }

// if (workerName === "Bob" && time < 12) {
//     isWorking = true
// } else {
//     isWorking = false
// }
// console.log(isWorking)


// rock, paper, scissors code project.  // Not challenge, but project. Understand the rules. https://www.napkin.ai/
//Inputs
// let userChoice = prompt("rock, paper or scissors?")
// let AIChoice = Math.floor(Math.random() * 3 + 1) // includes and exclude [) 0-1 * 25 => 0-25  // 0-1 * 2 => 0-2 + 1 => 1-2.999 => round to 1-3. Which function rounds 0.9 ot 0? How to explain!!!!
// // console.log(AIChoice)

// if (AIChoice === 1) {
//     AIChoice = "rock"
// }
// if (AIChoice === 2) {
//     AIChoice = "paper"
// }
// if (AIChoice === 3) {
//     AIChoice = "scissors"
// }

// //Game logic
// let winner = "draw"
// // if (usersChoise === "rock" && AIChoice === "rock") {
// //     winner = "draw"
// // }
// // if (usersChoise === "paper" && AIChoice === "paper") {
// //     winner = "draw"
// // }
// // if (usersChoise === "scissors" && AIChoice === "scissors") {
// //     winner = "draw"
// // }

// //simplify previous 3 if statements to 1
// if (userChoice === AIChoice) {  // draw  // want to show the way how we can simplify our statements
//     winner = "draw"
// }
// // user wins
// if (userChoice === "rock" && AIChoice === "scissors") {
//     winner = "User"
// }
// if (userChoice === "paper" && AIChoice === "rock") {
//     winner = "User"
// }
// if (userChoice === "scissors" && AIChoice === "paper") {
//     winner = "User"
// }
// // AI wins
// if (AIChoice === "rock" && userChoice === "scissors") {
//     winner = "AI"
// }
// if (AIChoice === "paper" && userChoice === "rock") {
//     winner = "AI"
// }
// if (AIChoice === "scissors" && userChoice === "paper") {
//     winner = "AI"
// }

// //Display the winner
// if (winner === "draw") {  // if the input is incorrect we will have a draw. We will learn how to control user's inputs in future episodes. 
//     alert("We have a draw.")
// } else {
//     alert(`${winner} wins the battle.`)
// }

//Challenge (Russian Roulette)
//Rules. In the game is a player and the AI. You have one pistol. You start to shoot. 50% chance that there will be a bullet. If you don't have the bullet, give the pistol to the AI and he starts to shoot, but if you has a bullet, show the message: "AI was shot...". If both are missed, display the message: "Both combatants emerged unscathed." Then display the winner. Example: "Player was shot..." OR "AI was shot...".
// let player = "Name"  // not use them
// let AI = "AI"
// let bulletChance = Math.floor(Math.random() * 2)
// let dead  // may create it for simplicity
// console.log(bulletChance)  // test the chance

//Game logic
// if (bulletChance === 1) {  //is bullet
//     alert("AI was shot...")
// } else {
//     if (bulletChance === 1) {  //is bullet
//         alert("Player was shot...")
//     } else {
//         alert("Both combatants emerged unscathed.")
//     }
// }

//Display the message  // if you need
// if (dead === "no one") {
//     alert("Both combatants emerged unscathed.")
// } else {
//     alert(`${dead} was shot...`)
// }

// console.log(bulletChance)
// console.log(bulletChance)
// console.log(bulletChance)
// console.log(bulletChance)
// console.log(bulletChance)
// console.log(bulletChance)
// console.log(bulletChance)

// console.log(bulletChance = Math.floor(Math.random() * 2))
// console.log(bulletChance = Math.floor(Math.random() * 2))
// console.log(bulletChance = Math.floor(Math.random() * 2))
// console.log(bulletChance = Math.floor(Math.random() * 2))
// console.log(bulletChance = Math.floor(Math.random() * 2))

//Game logic fixed
// if (bulletChance === 1) {  //is bullet
//     alert("AI was shot...")
// } else {
//     bulletChance = Math.floor(Math.random() * 2)
//     if (bulletChance === 1) {  //is bullet
//         alert("Player was shot...")
//     } else {
//         alert("Both combatants emerged unscathed.")
//     }
// }


// SIXTH EPISODE
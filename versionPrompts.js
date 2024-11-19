//Start of the game
// alert("Let's play tic tac toe!");

let boardDisplay = "_ _ _ \n_ _ _ \n_ _ _";
let board = "1 2 3 \n4 5 6 \n7 8 9";

// First term
let userChoice = prompt(
  "Put the number of the tile \n" + "Circle term \n" + board
); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "O");
}

//Second term
userChoice = prompt("Put the number of the tile \n" + "Cross term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "X");
}

// Third term
userChoice = prompt("Put the number of the tile \n" + "Circle term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "O");
}

//Four term
userChoice = prompt("Put the number of the tile \n" + "Cross term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "X");
}

// Five term
userChoice = prompt("Put the number of the tile \n" + "Circle term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "O");
}

//Six term
userChoice = prompt("Put the number of the tile \n" + "Cross term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "X");
}

//Seven term
userChoice = prompt("Put the number of the tile \n" + "Cross term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "O");
}

//Eight term
userChoice = prompt("Put the number of the tile \n" + "Cross term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "X");
}

//Nine term
userChoice = prompt("Put the number of the tile \n" + "Cross term \n" + board); // expected values 1-9;
if (userChoice) {
  board = board.replace(userChoice, "O");
}

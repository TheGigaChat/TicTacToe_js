//Init
let term = "Circle"; // Circle or Cross
let termSign = "O "; // O or X. Should add space here to don't add it everywhere
let winner = false;
let termCount = 1;

//Board
let one = "_ "; // 1 to 9. Prefer to use one, not first, as it is shorter
let two = "_ ";
let tree = "_ ";

let four = "_ ";
let five = "_ ";
let six = "_ ";

let seven = "_ ";
let eight = "_ ";
let nine = "_";

let board = one + two + tree + "\n" + four + five + six + "\n" + seven + eight + nine; //"_ _ _ \n_ _ _ \n_ _ _"

// All term
while (winner === false) {
  //reassigning the board
  board = one + two + tree + "\n" + four + five + six + "\n" + seven + eight + nine;

  let userChoice = prompt(
    "Put the number of the tile \n" + term + " term \n" + board
  ); // expected values 1-9;

  //term logics
  if (userChoice === "1") {
    one = termSign; // x !== X be carefull
  }
  if (userChoice === "2") {
    two = termSign;
  }
  if (userChoice === "3") {
    tree = termSign;
  }
  if (userChoice === "4") {
    four = termSign;
  }
  if (userChoice === "5") {
    five = termSign;
  }
  if (userChoice === "6") {
    six = termSign;
  }
  if (userChoice === "7") {
    seven = termSign;
  }
  if (userChoice === "8") {
    eight = termSign;
  }
  if (userChoice === "9") {
    nine = termSign;
  }

  /*   if (board === "X X X \n4 5 6 \n7 8 9") {
    winner = "Cross";
  }

  if (board === "1 2 3 \nX X X \n7 8 9") {
    winner = "Cross";
  }

  if ((board === "1 2 3 \n4 5 6 \nX X X")) {
    winner = "Cross";
  } */ // we can't just check the all combinations, as it not just 9 for circle

  /*   else {
    alert("Tile already taken! Try again.");
    continue; // Skip the rest of the loop
  } */ // it will be much harder to create the tree of if statements rather than the column as I have

  // if (a && b && c === termSign) - incorrect code

  // winner checker
  // Check horizontally
  if (one === termSign && two === termSign && tree === termSign) {
    winner = term;
  }
  if (four === termSign && five === termSign && six === termSign) {
    winner = term;
  }
  if (seven === termSign && eight === termSign && nine === termSign) {
    winner = term;
  }

  // Check vertically
  if (one === termSign && four === termSign && seven === termSign) {
    winner = term;
  }
  if (two === termSign && five === termSign && eight === termSign) {
    winner = term;
  }
  if (tree === termSign && six === termSign && nine === termSign) {
    winner = term;
  }

  // Check diagonally
  if (one === termSign && five === termSign && nine === termSign) {
    winner = term;
  }
  if (tree === termSign && five === termSign && seven === termSign) {
    winner = term;
  }

  // Check the draw
  if (termCount === 9) {
    winner = "Draw";
  }

  //toggle the term
  if (term === "Circle") {
    term = "Cross";
    termSign = "X ";
  } else {
    term = "Circle";
    termSign = "O ";
  }

  //count the term
  termCount = termCount + 1; // termCount = 3 + 1
}

if (winner === "Draw") {
  alert("It is a draw!");
} else {
  alert(winner + " is a winner!");
}

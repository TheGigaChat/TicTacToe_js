//Init
let term = "Circle"; // O or X
let termSign = "O";
let winner = false;

//Board
let a = "_ "; //1
let b = "_ "; //2
let c = "_ ";

let d = "_ ";
let e = "_ ";
let f = "_ ";

let g = "_ ";
let h = "_ ";
let j = "_"; //9

let board = a + b + c + "\n" + d + e + f + "\n" + g + h + j; //"_ _ _ \n_ _ _ \n_ _ _"

// All term
while (winner === false) {
  //reassigning the board
  board = a + b + c + "\n" + d + e + f + "\n" + g + h + j;

  let userChoice = prompt(
    "Put the number of the tile \n" + term + " term \n" + board
  ); // expected values 1-9;

  //term logics
  if (userChoice === "1") {
    a = termSign + " "; // x !== X be carefull
  }
  if (userChoice === "2") {
    b = termSign + " ";
  }
  if (userChoice === "3") {
    c = termSign + " ";
  }
  if (userChoice === "4") {
    d = termSign + " ";
  }
  if (userChoice === "5") {
    e = termSign + " ";
  }
  if (userChoice === "6") {
    f = termSign + " ";
  }
  if (userChoice === "7") {
    g = termSign + " ";
  }
  if (userChoice === "8") {
    h = termSign + " ";
  }
  if (userChoice === "9") {
    j = termSign + " ";
  }

  //toggle the term
  if (term === "Circle") {
    term = "Cross";
    termSign = "X";
  } else {
    term = "Circle";
    termSign = "O";
  }

  /*   if (userChoice === "a") {
    eval(userChoice + " = 'some code'");
  } */ //do I really need it?

  /*   if (board === "X X X \n4 5 6 \n7 8 9") {
    winner = "Cross";
  }

  if (board === "1 2 3 \nX X X \n7 8 9") {
    winner = "Cross";
  }

  if ((board === "1 2 3 \n4 5 6 \nX X X")) {
    winner = "Cross";
  } */ // we can't just check the all combinations, as it not just 9 for circle

  if (a && b && c === "X") {
    winner = "Cross";
  }
}

alert(winner + " is a winner!");

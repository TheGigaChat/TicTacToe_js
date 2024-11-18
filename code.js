let gameboard = document.getElementById("gameboard");
let infoDisplay = document.getElementById("info");
let startCells = ["", "", "", "", "", "", "", "", ""];
let go = "circle";

infoDisplay.textContent = "circle";

let createBoard = () => {
  startCells.forEach((_cell, index) => {
    let cellElement = document.createElement("div");
    cellElement.addEventListener("click", addGo);
    cellElement.classList.add("square");
    cellElement.id = index;
    gameboard.append(cellElement);
  });
};

createBoard();

function addGo(e) {
  let goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);

  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "now " + go + " term";

  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  let allSquares = document.querySelectorAll(".square");
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((arr) => {
    let circleWins = arr.every((cell) => {
      console.log(allSquares[cell].firstChild?.classList[0]);
    });
    if (circleWins) {
      infoDisplay.textContent = "Circle Wins!";
    }
  });
}

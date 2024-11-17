let gameboard = document.getElementById("gameboard");
let infoDisplay = document.getElementById("info");
let startCells = ["", "", "", "", "", "", "", "", ""];

infoDisplay.textContent = "Circle";

let createBoard = () => {
  startCells.forEach((cell, index) => {
    let cellElement = document.createElement("div");
    cellElement.classList.add("square");
    let circleElement = document.createElement("div");
    cellElement.classList.add("circle");
    cellElement.innerHTML = index;
    gameboard.append(cellElement);
    gameboard.append(circleElement);
  });
};

createBoard();

const container = document.querySelector(".container");
const gridColumn = document.querySelectorAll(".column");
const btn = document.querySelector(".button");


function drawGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let j = 0; j < gridSize; j++) {
      const row = document.createElement("div");
      row.classList.add("gridSquare", "row");
      column.appendChild(row);
    }
  }
}

function clearGrid() {
  container.innerHTML = "";
};
  

btn.addEventListener('click', () => {
  const prompt = window.prompt("Please enter a number from 1-100")
  gridSize = Number(prompt);
  if ((Number(prompt) > 0) && (Number(prompt < 101))) {
    clearGrid();
    drawGrid(gridSize);
    changeColor();
  } else {
    alert("You did not enter a number from 1-100.");
  }
})

drawGrid(16);

function changeColor() {
  const gridRow = document.querySelectorAll(".row");
  for (const square of gridRow) {
    square.addEventListener('mouseover', () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      square.style.backgroundColor = randomColor;
      console.log("change color");
      })
  }
}

changeColor();
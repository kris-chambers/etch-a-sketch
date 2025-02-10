let gridSize = 25;

const container = document.querySelector(".container");

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

drawGrid(gridSize);

const gridRow = document.querySelectorAll(".row");

for (const square of gridRow) {
  square.addEventListener('mouseover', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    square.style.backgroundColor = randomColor;
    console.log("change color");
    })
}




let gridSize = 10;

const container = document.querySelector(".container");
const gridColumn = document.querySelector(".column");
const gridRow = document.querySelector(".row");



function drawColumns(gridSize) {
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

drawColumns(gridSize);
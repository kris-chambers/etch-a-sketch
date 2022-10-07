let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";
  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.className = "square",
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "white";
    });
  }

let button = document.querySelector(".button")
button.addEventListener("click", () => {
  let size= prompt("Choose grid size");
  grid(size);
  drawBoard(size);
});

function grid(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
};

function drawBoard(size) {
  for (let i = 0; i < size * size; i++) {
    let board = document.querySelector(".board");
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "white";
    })
  }
};
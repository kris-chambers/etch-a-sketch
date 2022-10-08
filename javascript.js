let board = document.querySelector(".board");
let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");

// board.style.gridTemplateColumns = "repeat(16, 1fr)";
// board.style.gridTemplateRows = "repeat(16, 1fr)";
//   for (let i = 0; i < 256; i++) {
//     let block = document.createElement("div");
//     block.className = "square",
//     block.style.backgroundColor = "blue";
//     board.insertAdjacentElement("beforeend", block);
//     block.addEventListener("mouseover", () => {
//       block.style.backgroundColor = "white";
//     });
//   }


button.addEventListener("click", () => {
  let size= prompt("Choose grid size");
  grid(size);
  drawBoard(size);
});

button2.addEventListener("click", () => {
  resetBoard();
});

// function to recolor squares with subsequent passes

function grid(size) {
// draw the grid given x size  
  // let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
};

function drawBoard(size) {
// draw the board given x size  
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.setAttribute("id", "square");
    square.setAttribute("style", "background-color:blue");
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "white";
    })
  }
};

function resetBoard() {
  // reset board colors
    document.getElementById(square).style.backgroundColor = "blue";
}
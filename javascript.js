let board = document.querySelector(".board");
let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");
let bottom = document.querySelector(".bottom");

button.addEventListener("click", () => {
// Grid size button to draw board  
  let size= prompt("Choose grid size");
  if (size >= 2 && size <= 100) {
    grid(size);
    drawBoard(size);
  } else {
    alert("Please choose a number between 2-100");
    button.click();
  }  
});

button2.addEventListener("click", () => {
// Reset button to reset board  
  board.innerHTML = '';
  button.click();
});

// function to recolor squares with subsequent passes

function grid(size) {
// draw the grid given x size  
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
};

function drawBoard(size) {
// draw the board given x size  
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.setAttribute("id", "square");
    square.setAttribute("style", "background-color:white");
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    })
  }
};

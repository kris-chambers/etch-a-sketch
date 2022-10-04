const container = document.querySelector('#container');
const square = document.querySelector('.square');

function createGrid() {
  for (let i = 1; i < 17; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.setAttribute('id', 'square' + i)
    gridSquare.classList.add('square');
    gridSquare.textContent = "box";
    container.append(square);
    }
};

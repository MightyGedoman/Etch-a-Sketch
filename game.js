// for now grid will be the user input variable.
let grid = 16
const box = document.querySelector('.box');
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')
const numGrid = document.querySelector('.num-grid')
let divstring = "";
let grid2 = grid*grid;
let dimentions = 600/grid;
let isDrawing = false;


function draw() {
    start.addEventListener("click", () => {
        color();
        isDrawing = true;
        })

    /* reset.addEventListener('click', () => {
        resetColor();
        isDrawing = false;
    
    }) */
    
    numGrid.addEventListener('click', () => {
        updateGrid()
    })
}



function createGrid() {
    let divstring = "";
    for(let i = 1; i <= grid2; i++){
        divstring += `<div class='square'></div>`;
    }
    box.innerHTML = divstring;
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach((square) => {
        square.setAttribute('style', `width: ${dimentions}px; height: ${dimentions}px;`)
    });
    return squares; 
}


function updateGrid() {
    let newGrid = parseInt(prompt('Enter the new grid size (minimum: 16):'));
    if (newGrid >= 16) {
      grid = newGrid;
      grid2 = newGrid * newGrid
      dimentions = 600 / newGrid
      createGrid();
    }
  }

function color() {
    const squares = createGrid();
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = 'black';
        });
    });
}

/* function resetColor() {
    const squares = createGrid();
    squares.forEach((square) => {
        square.removeEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        square.style.backgroundColor = '';
    });
} */

createGrid()
draw()
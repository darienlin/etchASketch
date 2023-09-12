//function that allows the white squares to turn black
const squareBtn = document.querySelector('.square')
squareBtn.addEventListener('click',() => {
   squareBtn.classList.add('black')
})

//populates the grid with visible grid squares
const gridContainer = document.querySelector('#gridContainer')
function makeGrid(row, col){
    for(let i = 0; i < col * row; i++){
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "square";
    }
}

makeGrid(16,16)
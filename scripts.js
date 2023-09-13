//populates the grid with visible grid squares
const gridContainer = document.querySelector('#gridContainer')
function makeGrid(row, col) {
    for (let i = 0; i < col * row; i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "square";
    }
}

//makes the 16x16 grid
makeGrid(16, 16)


//function that allows the white squares to turn black
const squareArray = document.querySelectorAll('.square')

squareArray.forEach(function (elem) {
    elem.addEventListener('drag', () => {
        elem.classList.add('black')
    })
})

function clearBoard(){
squareArray.forEach(function(elem){
    elem.classList.remove('black')
})
}

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () =>{
    clearBoard()
})
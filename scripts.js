//grid
const gridContainer = document.querySelector('#gridContainer');
var squareArray = document.querySelectorAll('.blank');
function makeGrid(row){
    gridContainer.style.gridTemplateColumns = (`repeat(${row}, 1fr`)
    gridContainer.style.gridTemplateRows = (`repeat(${row}, 1fr`)

    for(let i = 0; i < row * row; i++){
        var blankSquare = document.createElement('div')
        blankSquare.classList.add('blank')
        gridContainer.appendChild(blankSquare)
    }
    squareArray = document.querySelectorAll('.blank')
    squareArray.forEach(elem =>{
        elem.addEventListener('mousedown', () =>{
            elem.classList.add('black')
        })
    })
}

function clearGrid() {
    while(gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }

  //makes the grid
makeGrid(16)


//slider
const sliderContainer = document.querySelector('.sliderContainer')
const slider = document.querySelector('.slider')
var sliderVal = slider.value
var sliderContent = document.createElement('div')
//sliderContent.classList.add('center')
sliderContent.textContent = sliderVal + 'x' + sliderVal
sliderContainer.appendChild(sliderContent)

slider.addEventListener('change', () =>{
    var sliderVal = slider.value
    sliderContent.textContent = sliderVal + 'x' + sliderVal
    clearGrid();
    makeGrid(sliderVal);
})



//clear button
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('mousedown', () =>{
    squareArray.forEach(elem =>{
        elem.classList.remove('black')
    })
    clearBtn.classList.add('clickedButton')
})

clearBtn.addEventListener('mouseup', () =>{
    clearBtn.classList.remove('clickedButton')
})

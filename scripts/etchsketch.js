
const container = document.querySelector('#container');

function clearGrid(){

  const currentGrid = document.querySelectorAll('#container > div');

  if(currentGrid){
    currentGrid.forEach((item) => container.removeChild(item));
  }
}


function adjustGrid(e){

  clearGrid();

  //create the grid based on squareNumber
  let squareNumber = prompt('Enter the number of squares for the Sketchpad: ');

  container.style.gridTemplateColumns = `repeat(${+squareNumber},${400/+squareNumber}px)`;

  container.style.gridTemplateRows = `repeat(${+squareNumber},${400/+squareNumber}px)`;

  //creating the divs inside the container
  let divArray = [];
  for(let i = 0; i < squareNumber**2; i++){
    divArray[i] = document.createElement('div');
    container.appendChild(divArray[i]);
  }


}

const sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', adjustGrid);

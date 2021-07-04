
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
  let squareNumber = prompt('Enter the number of squares (between 0 and 100) for the Sketchpad: ');

  if(+squareNumber > 100){
    alert('Please input a number below 100');
    return;
  }

  container.style.gridTemplateColumns = `repeat(${+squareNumber},${400/+squareNumber}px)`;

  container.style.gridTemplateRows = `repeat(${+squareNumber},${400/+squareNumber}px)`;

  //creating the divs inside the container
  let divArray = [];
  for(let i = 0; i < squareNumber**2; i++){
    divArray[i] = document.createElement('div');

    //making sure the divs leave a trial like a pen
    divArray[i].addEventListener('mouseover',
      (e) => event.target.classList.add('trial'));
    container.appendChild(divArray[i]);
  }


}

const sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', adjustGrid);

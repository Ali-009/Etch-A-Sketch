
let container = document.querySelector('#container');

let divArray = [];

for(let i = 0; i < 256; i++){
  divArray[i] = document.createElement('div');
  container.appendChild(divArray[i]);
}

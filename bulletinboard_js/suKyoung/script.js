
window.addEventListener('load', init);

function init() {
  document.forms[0].addEventListener('submit', createNewBoard);
  document.body.addEventListener('drop', dropBoard);
  document.body.addEventListener('dragover', allowDrop);
};

function createNewBoard(e) {
  e.preventDefault();
  const toDoLists = document.querySelector('input');
  const board = document.createElement('div');
  board.setAttribute('draggable', 'true');
  board.addEventListener('dragstart', dragBoard);
  board.style.backgroundColor = paintBackgroundColor();

  const span = document.createElement('span');
  span.innerText = toDoLists.value;
  toDoLists.value = '';

  const closeButton = document.createElement('button');
  closeButton.innerText ='X';
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('class', 'close');
  closeButton.addEventListener('click', deleteBoard);

  board.appendChild(span);
  board.appendChild(closeButton);
  
  return document.body.appendChild(board);
};

function deleteBoard() {
  const parentDiv = this.parentElement;
  parentDiv.remove();
};

function paintBackgroundColor() {
  const backgroundColors = [
    'lightcoral', 
    'lightpink', 
    'lightblue', 
    'lightgrey',
    'lightsalmon',
    'lightseagreen',
    'lightsteelblue',
    'lightslategrey',
  ];
  const backgroundColorIndex = backgroundColors.length;
  const randomNum = Math.floor(Math.random()*backgroundColorIndex);
  return backgroundColors[randomNum];
};

function dragBoard(e) {
  const posX = e.clientX;
  const posY = e.clientY;
  e.target.style.left = posX + 'px';
  e.target.style.top = posY + 'px';
};

function dropBoard(e) {
  e.preventDefault();
};

function allowDrop(e) {
  e.preventDefault();
  e.dataTransfer.effectAllowed = "move";
  dragBoard(e);
};
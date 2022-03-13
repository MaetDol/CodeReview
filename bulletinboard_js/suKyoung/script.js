
window.addEventListener('load', init);

function init() {
  document.forms[0].addEventListener('submit', createNewBoard);
  document.body.addEventListener('drop', dropBoard);
  document.body.addEventListener('dragover', allowDrop);
};

function createNewBoard(e) {
  e.preventDefault();
  const randomId = new Date().getMilliseconds();
  const board = document.createElement('div');
  board.setAttribute('draggable', 'true');
  board.addEventListener('dragstart', dragBoard);
  board.setAttribute('id', randomId);
  board.style.backgroundColor = paintBackgroundColor();
  
  const toDoLists = document.querySelector('input');
  const span = document.createElement('span');
  span.setAttribute('draggable', 'false');
  span.innerText = toDoLists.value || '메모없음';
  toDoLists.value = '';

  const closeButton = document.createElement('button');
  closeButton.innerText ='X';
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('class', 'close');
  closeButton.setAttribute('draggable', 'false');
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
  let target = e.target;
  if (e.target.id === '' && e.target.parentElement.tagName === 'DIV') {
    e.stopPropagation();
    target = e.target.parentElement;
  }
  const posX = e.clientX;
  const posY = e.clientY;
  target.style.left = posX + 'px';
  target.style.top = posY + 'px';
};

function dropBoard(e) {
  e.preventDefault();
};

function allowDrop(e) {
  e.preventDefault();
  e.dataTransfer.effectAllowed = "move";
  dragBoard(e);
};
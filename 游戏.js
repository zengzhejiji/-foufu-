// 棋盘大小10x10
const boardSize = 10;
// 雷的数量
const numBombs = 10;

const board = Array.from({length: boardSize},() =>
    Array.from({length: boardSize},() =>
    0)
);

function placeBombs(){
    let  bombsPlaced = 0;
    while (bombsPlaced <numBombs){
        const x = Math.floor(Math.random() * boardSize);
        const y = Math.floor(Math.random() * boardSize);
        if (board[x][y] !==1){
            board[x][y] = -1;
            bombsPlaced++;
        }
    }
}

function countNeighbors(){
    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++)
{
    if (board[x][y] !== -1){
    let count = 0;
    for (let i = Math.max(0,x-1); i <= Math.min(x+1,boardSize-1); i++){
    for (let j = Math.max(0,y-1); j <= Math.min(y+1,boardSize-1); j++){
        if (board[i][j] === -1){
            count++;
        }
      }
    }
    }
}
}
}

function createBoard(){
    const boardElement = document.getElementById('board');
    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener('click', () => handleCellClick(x, y));
            boardElement.appendChild(cell);

        }
    }
}

function handleCellClick(x, y){
    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (board[x][y] === -1) {
        cell.style.backgroundColor = 'red';
    }else {
        cell.style.backgroundColor = '#e0e0e0';
        if (board[x][y] === 0) {
            for (let i = Math.max(0,x-1); i <= Math.min(x+1,boardSize-1); i++){
                for (let j = Math.max(0,y-1); j <= Math.min(y+1,boardSize-1); j++){
                    if (!document.querySelector(`[data-x="${i}"][data-y="${j}"]`).textContent){
                        handleCellClick(i,j);
                    }
                }
            }
        }
    }
}

function initGame() {
    placeBombs()
    countNeighbors()
    createBoard()
}
initGame();

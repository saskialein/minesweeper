document.addEventListener('DOMContentLoaded', startGame);
document.addEventListener('click', checkForWin);
document.addEventListener('contextmenu', checkForWin);

// Define your `board` object here!
/*var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: true,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: true,
      hidden: true
    }
  ]
}*/
let board = { cells: [] };
let size = 6;

function createBoard () {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      board.cells.push(
        {
          row: i,
          col: j,
          isMine: Math.random() <= 0.75,
          hidden: true })
    }
  }
}


function startGame() {
  // Don't remove this function call: it makes the game work!
  createBoard();
  lib.initBoard();

  for (cell = 0; cell < board.cells.length; cell++) {
    board.cells[cell]['surroundingMines'] = countSurroundingMines(board.cells[cell])
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function playSound() {
  winnerSound = new Audio("Winning-sound-effect.mp3");
  winnerSound.play();
}

function checkForWin () {
  allMines = board.cells.filter(cell => cell.isMine === true);
  allClearFields = board.cells.filter(cell => cell.isMine === false);
  allMarkedMines = allMines.every(cell => cell.isMarked === true);
  allClearFieldsVisible = allClearFields.every(cell => cell.hidden === false);

  
      if (allMarkedMines && allClearFieldsVisible) {
        lib.displayMessage('YOU WIN!')
        playSound()
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
  function countSurroundingMines(cell) {
    surrounding = lib.getSurroundingCells(cell.row, cell.col)
    countMines = 0;
    for (i = 0; i < surrounding.length; i++) {
      if (surrounding[i].isMine === true) {
      countMines++
     }
    }
    return countMines;
  };


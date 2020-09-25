document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
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
}

function startGame() {
  // Don't remove this function call: it makes the game work!
  for (cell = 0; cell < board.cells.length; cell++) {
    board.cells[cell]['surroundingMines'] = countSurroundingMines(board.cells[cell])
  }

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
function clearFieldsVisible() {
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].hidden) {
      return false
    } else {
      return true
    }
  }
}
// 2. Are all of the mines marked?
function minesMarked() {
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) {
      return false
    } else {
      return true
    }
  }
}

function checkForWin () {
      if (clearFieldsVisible() && minesMarked()) {
      lib.displayMessage('You win!')
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


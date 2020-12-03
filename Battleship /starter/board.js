class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    const arr = [];
    for (let i = 0; i < this.numRows; i++){
      const inner = []
      for(let j = 0; j < this.numCols; j++){
        inner.push('~');
      }
      arr.push(inner);
    }
    for (let k = 0; k < this.numShips; k++) {
      const ship = [];
      ship.push(randCoordinate(0, this.numRows));
      ship.push(randCoordinate(0, this.numCols));
      const shipRow = ship[0];
      const shipCol = ship[1];
      arr[shipRow][shipCol] = "s"
    }
    console.log(arr)
    return arr;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    const arr2 = [];
    for (let i = 0; i < this.grid.length; i++){
      const inner2 = [];
      const testRow = this.grid[i];
      for(let j = 0; j < testRow.length; j++){
        if (testRow[j] === 's'){
            inner2.push('~');
        }else {
          console.log(this.grid);
          console.log(testRow[j]);
          inner2.push(testRow[j]);
        }
      }
      arr2.push(inner2);
    }
    console.table(arr2);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    let count = 0;
    // console.log(this.grid);
    for (let i = 0; i < this.grid.length; i++){
      const testRow = this.grid[i];
      for (let j = 0; j < testRow.length; j++){
        if (testRow[j] === 's'){
          // console.log('you are here')
          count++;
        }
      }
    }
    return count;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    const row = pos[0];
    const col = pos[1];
    if (this.grid[row][col] === 's' || this.grid[row][col] === '~'){
      return true
    }else {
      return false;
    }
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    // console.log(this.count());
    if (this.count() === 0){
      // console.log(this.count());
      return true;
    }else {
      return false;
    }
  }

  attack(pos) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    const row = pos[0];
    const col = pos[1];
    if (this.grid[row][col] === 's'){
      this.grid[row][col] = 'h';
    }else {
      this.grid[row][col] = 'x';
    }
    console.log('inside attack', this.grid);
  }
}


function randCoordinate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// const newBoard = new Board(5,5,2);
// console.table(newBoard.grid)
// newBoard.display();

module.exports = Board;

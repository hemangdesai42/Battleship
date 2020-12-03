const Board = require('./board.js');
// const humanPlayer = require('./humanPlayer.js');

class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    this.board = new Board(numRows, numCols, numShips);
    this.player = player1;
  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
    this.displayStatus();
    this.player.getMove(this.processMove.bind(this));
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
    this.board.display();
  }

  processMove(coordinates) {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
    if(this.board.isValidMove(coordinates)){
      console.log('inside process move');
      this.board.attack(coordinates);
      // this.turns++;
    }
    if(this.board.isGameOver()){
      this.player.processGameOver();
    }else {
      this.playTurn();
    }
  }
}

// const newGame = new BattleshipGame('bob', 5,5,5)
// newGame.processMove([0,0]);
module.exports = BattleshipGame;


const readline = require('readline');


class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    this.rl = readline.createInterface(process.stdin, process.stdout);
    // variable (this.rl). Remember to require the built-in node module,

    // 'readline'
  }

  // getMove() {
  //   // TODO: Ask the user for their move and process the answer using the rl
  //   this.rl.question("Where do you want to move? (Enter a number desginating a row and column)", answer =>{
  //     const coordinates = answer.split(',');
  //     game.processMove(coordinates);
  //   })
  //   // interface.Invoke the callback function (processMove), passing in
  //   // the given answer in the form of an array representing [row, col]
  // }

  getMove(processMove) {
    // TODO: Ask the user for their move and process the answer using the rl
    this.rl.question("Where do you want to move? (Enter a number desginating a row and column)", answer =>{
      const coordinates = answer.split(',');
      processMove(coordinates);
    })
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
  }

  processGameOver() {
    // TODO: Display a different message depending on if the player won or lost
    // if (isWon) {
      console.log("You have sunk my battleship!")
    // } else {
    //   console.log("You lose!")
    // }
    // the game. Close the rl interface.
    this.rl.close()
  }
}

module.exports = HumanPlayer;

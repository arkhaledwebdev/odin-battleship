const GameNode = require("./gameNode");

class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.board = [];
    this.initializeBoard();
  }

  initializeBoard() {
    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        this.board(new GameNode(i, j));
      }
    }
  }

  //   placeShip(ship, isVertical, startPosition) {
  //     const x = startPosition[0];
  //     const y = startPosition[1];

  //   }
}

module.exports = GameBoard;

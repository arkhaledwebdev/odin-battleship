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
        this.board.push(new GameNode(i, j));
      }
    }
  }

  placeShip(ship, isVertical, startPosition) {
    const x = startPosition[0];
    const y = startPosition[1];

    if (!isVertical) {
      for (let i = 0; i < ship.length; i += 1) {
        const horizontalIndex = x + i + y * 10;
        if (horizontalIndex >= 0 && horizontalIndex < this.size * this.size) {
          this.board[horizontalIndex].ship = ship;
        }
      }
    } else {
      for (let j = 0; j < ship.length; j += 1) {
        const verticalIndex = x + (y + j) * 10;

        if (verticalIndex >= 0 && verticalIndex < this.size * this.size) {
          this.board[verticalIndex].ship = ship;
        }
      }
    }
  }

  receiveAttack(position) {
    const x = position[0];
    const y = position[1];

    const index = x + y * 10;

    const isShipHit = this.board[index].ship !== null;

    if (isShipHit) {
      this.board[index].ship.hit();
    } else {
      this.board[index].isMissed = true;
    }
  }
}

module.exports = GameBoard;

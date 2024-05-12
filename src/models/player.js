const GameBoard = require("./gameboard");
const Ship = require("./ship");

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new GameBoard();
    this.attacks = [];
    this.carrier = new Ship("Carrier", 5);
    this.battleship = new Ship("Battleship", 4);
    this.destroyer = new Ship("Destroyer", 3);
    this.submarine = new Ship("Submarine", 3);
    this.boat = new Ship("Boat", 2);
  }

  attack(position, gameboard) {
    const x = position[0];
    const y = position[1];
    const index = x * 10 + y;
    this.attacks.push(index);
    gameboard.receiveAttack(position);
  }

  getRandomAttackIndex() {
    const attacksDone = this.attacks;
    let attackIndex;

    do {
      attackIndex = Math.floor(Math.random() * 100);
    } while (attacksDone.includes(attackIndex));

    return attackIndex;
  }

  attackWithAi(gameBoard) {
    const randomIndex = this.getRandomAttackIndex();
    const xPosition = randomIndex % 10;
    const yPosition = Math.floor(randomIndex / 10);
    const attackPosition = [xPosition, yPosition];
    this.attacks.push(randomIndex);
    gameBoard.receiveAttack(attackPosition);
  }

  isGameOver() {
    return (
      this.carrier.isSunk &&
      this.battleship.isSunk &&
      this.destroyer.isSunk &&
      this.submarine.isSunk &&
      this.boat.isSunk
    );
  }
}

module.exports = Player;

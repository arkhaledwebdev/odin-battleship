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
    const index = x + y * 10;
    this.attacks.push(index);
    gameboard[index].receiveAttack(position);
  }

  //   attackWithAI(){

  //   }
}

module.exports = Player;

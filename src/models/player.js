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

  // attackWithAI(gameboard) {

  //   // const emptyNodes = gameboard.getEmptyNodes();
  //   // let randomNodeIndex = Math.floor(Math.random() * emptyNodes.length);
  //   // let attackNode = emptyNodes[randomNodeIndex];
  //   // while (attackNode.isHit === true || attackNode.isMissed === true) {
  //   //   randomNodeIndex = Math.floor(Math.random() * emptyNodes.length);
  //   //   attackNode = emptyNodes[randomNodeIndex];
  //   // }
  //   // const attackPosition = attackNode.position;
  //   // this.attacks.push(attackNode.index);
  //   // gameboard.receiveAttack(attackPosition);
  // }
}

module.exports = Player;

const Player = require("../models/player");
const {
  generateRandomShipPositions,
  generateRandomNumber,
} = require("../util/random_numbers");

function initPlayer() {
  const player = new Player("PLAYER");
  const shipPositions = generateRandomShipPositions();

  player.gameboard.placeShip(player.carrier, false, [
    shipPositions[0],
    generateRandomNumber(6),
  ]);
  player.gameboard.placeShip(player.battleship, false, [
    shipPositions[1],
    generateRandomNumber(7),
  ]);
  player.gameboard.placeShip(player.destroyer, false, [
    shipPositions[2],
    generateRandomNumber(8),
  ]);
  player.gameboard.placeShip(player.submarine, false, [
    shipPositions[3],
    generateRandomNumber(8),
  ]);
  player.gameboard.placeShip(player.boat, false, [
    shipPositions[4],
    generateRandomNumber(9),
  ]);
  return player;
}

function initComputer() {
  const computer = new Player("Computer");
  const shipPositions = generateRandomShipPositions();

  computer.gameboard.placeShip(computer.carrier, false, [
    shipPositions[0],
    generateRandomNumber(6),
  ]);
  computer.gameboard.placeShip(computer.battleship, false, [
    shipPositions[1],
    generateRandomNumber(7),
  ]);
  computer.gameboard.placeShip(computer.destroyer, false, [
    shipPositions[2],
    generateRandomNumber(8),
  ]);
  computer.gameboard.placeShip(computer.submarine, false, [
    shipPositions[3],
    generateRandomNumber(8),
  ]);
  computer.gameboard.placeShip(computer.boat, false, [
    shipPositions[4],
    generateRandomNumber(9),
  ]);
  return computer;
}

module.exports = { initPlayer, initComputer };

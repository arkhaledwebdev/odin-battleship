const Player = require("../models/player");

test("test the player attack", () => {
  const playerOne = new Player("P1");
  const playerTwo = new Player("P2");
  playerOne.gameboard.placeShip(playerTwo.boat, false, [9, 8]);
  playerTwo.gameboard.placeShip(playerOne.destroyer, true, [0, 0]);
  playerOne.attack([0, 0], playerTwo.gameboard);
  playerOne.attack([1, 0], playerTwo.gameboard);
  playerOne.attack([2, 0], playerTwo.gameboard);
  playerOne.attack([3, 0], playerTwo.gameboard);
  playerTwo.attack([9, 9], playerOne.gameboard);
  expect(playerTwo.gameboard.board[10].isHit).toEqual(true);
  expect(playerOne.gameboard.board[99].isHit).toEqual(true);
});

test("test get Random attack position", () => {
  const playerOne = new Player("P1");
  playerOne.attacks = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98,
  ];
  expect(playerOne.getRandomAttackIndex()).toBeGreaterThan(98);
});

test("Test attack with AI", () => {
  const playerOne = new Player("P1");
  const playerTwo = new Player("AI");

  for (let i = 0; i < 100; i += 1) {
    playerTwo.attackWithAi(playerOne.gameboard);
  }

  for (let index = 0; index < 100; index += 1) {
    expect(playerOne.gameboard.board[index].isMissed).toEqual(true);
  }
});

test("test the isSunk function when all ships have been sunken", () => {
  const player = new Player("P1");
  player.carrier.isSunk = true;
  player.battleship.isSunk = true;
  player.boat.isSunk = true;
  player.submarine.isSunk = true;
  player.destroyer.isSunk = true;
  expect(player.isGameOver()).toEqual(true);
});

test("test the isSunk function when not all ships have been sunken", () => {
  const player = new Player("P1");
  player.battleship.isSunk = true;
  player.boat.isSunk = true;
  player.submarine.isSunk = true;
  player.destroyer.isSunk = true;
  expect(player.isGameOver()).toEqual(false);
});

const GameBoard = require("../models/gameboard");
const Ship = require("../models/ship");

test("test if the place ship horizontally function works correctly", () => {
  const gameBoard = new GameBoard();
  const destroyer = new Ship("destroyer", 4);
  gameBoard.placeShip(destroyer, false, [0, 0]);
  expect(gameBoard.board[0].ship.name).toEqual("destroyer");
  expect(gameBoard.board[1].ship.name).toEqual("destroyer");
  expect(gameBoard.board[2].ship.name).toEqual("destroyer");
  expect(gameBoard.board[3].ship.name).toEqual("destroyer");
});

test("test if the place ship vertically function works correctly", () => {
  const gameBoard = new GameBoard();
  const boat = new Ship("boat", 2);
  gameBoard.placeShip(boat, true, [2, 2]);
  expect(gameBoard.board[22].ship.name).toEqual("boat");
  expect(gameBoard.board[32].ship.name).toEqual("boat");
});

test("test if the receive attack function works correctly when attack is hit and ship is sunk", () => {
  const gameBoard = new GameBoard();
  const destroyer = new Ship("destroyer", 4);
  gameBoard.placeShip(destroyer, false, [0, 0]);
  gameBoard.receiveAttack([0, 0]);
  gameBoard.receiveAttack([0, 1]);
  gameBoard.receiveAttack([0, 2]);
  gameBoard.receiveAttack([0, 3]);
  gameBoard.receiveAttack([6, 6]);
  gameBoard.receiveAttack([7, 7]);
  expect(gameBoard.board[66].isMissed).toEqual(true);
  expect(gameBoard.board[77].isMissed).toEqual(true);
  expect(gameBoard.board[0].isHit).toEqual(true);
  expect(gameBoard.board[1].isHit).toEqual(true);
  expect(gameBoard.board[2].isHit).toEqual(true);
  expect(gameBoard.board[3].isHit).toEqual(true);
  expect(gameBoard.board[0].ship.numberOfHits).toEqual(4);
  expect(gameBoard.board[0].ship.isSunk).toEqual(true);
});

test("test if the receive attack function works correctly when  attack is missed", () => {
  const gameBoard = new GameBoard();
  const boat = new Ship("boat", 2);
  gameBoard.placeShip(boat, false, [9, 8]);
  gameBoard.receiveAttack([9, 8]);
  gameBoard.receiveAttack([9, 9]);
  gameBoard.receiveAttack([6, 1]);
  gameBoard.receiveAttack([7, 5]);
  expect(gameBoard.board[98].isHit).toEqual(true);
  expect(gameBoard.board[99].isHit).toEqual(true);
  expect(gameBoard.board[61].isMissed).toEqual(true);
  expect(gameBoard.board[75].isMissed).toEqual(true);
});

test("if getEmptyNodes works correctly", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier", 5);
  gameBoard.placeShip(carrier, false, [0, 0]);
  gameBoard.receiveAttack([0, 0]);
  gameBoard.receiveAttack([0, 1]);
  gameBoard.receiveAttack([0, 2]);
  gameBoard.receiveAttack([0, 3]);
  gameBoard.receiveAttack([0, 4]);
  gameBoard.receiveAttack([0, 5]);
  gameBoard.receiveAttack([0, 6]);
  gameBoard.receiveAttack([0, 7]);
  gameBoard.receiveAttack([0, 8]);
  gameBoard.receiveAttack([0, 9]);
  expect(gameBoard.getEmptyNodes()).toEqual([
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
    67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ]);
});

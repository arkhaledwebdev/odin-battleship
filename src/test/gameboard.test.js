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
  gameBoard.receiveAttack([1, 0]);
  gameBoard.receiveAttack([2, 0]);
  gameBoard.receiveAttack([3, 0]);
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
  gameBoard.placeShip(boat, true, [9, 8]);
  gameBoard.receiveAttack([9, 8]);
  gameBoard.receiveAttack([9, 9]);
  gameBoard.receiveAttack([6, 1]);
  gameBoard.receiveAttack([7, 5]);
  expect(gameBoard.board[89].isHit).toEqual(true);
  expect(gameBoard.board[99].isHit).toEqual(true);
  expect(gameBoard.board[16].isMissed).toEqual(true);
  expect(gameBoard.board[57].isMissed).toEqual(true);
});

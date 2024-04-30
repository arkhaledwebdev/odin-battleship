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

// test("test the AI attack", () => {
//   const playerOne = new Player("P1");
//   const playerTwo = new Player("AI");

//   for (let i = 0; i < 100; i += 1) {
//     playerTwo.attackWithAI(playerOne.gameboard);
//   }

//   for (let index = 0; index < 100; index += 1) {
//     expect(playerOne.gameboard.board[index].isMissed).toEqual(true);
//   }
// });

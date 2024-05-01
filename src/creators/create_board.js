import Player from "../models/player";

export default function createBoard() {
  const playerBoard = document.getElementById("player-board");
  const computerBoard = document.getElementById("computer-board");
  const player = new Player("PLAYER");
  const computer = new Player("COMPUTER");
  player.gameboard.placeShip(player.carrier, false, [0, 0]);
  player.gameboard.placeShip(player.battleship, false, [2, 0]);
  player.gameboard.placeShip(player.destroyer, false, [4, 0]);
  player.gameboard.placeShip(player.submarine, false, [6, 0]);
  player.gameboard.placeShip(player.boat, false, [8, 0]);
  computer.gameboard.placeShip(computer.carrier, false, [0, 0]);
  computer.gameboard.placeShip(computer.battleship, false, [2, 0]);
  computer.gameboard.placeShip(computer.destroyer, false, [4, 0]);
  computer.gameboard.placeShip(computer.submarine, false, [6, 0]);
  computer.gameboard.placeShip(computer.boat, false, [8, 0]);

  for (let i = 0; i < 100; i += 1) {
    const playerNode = document.createElement("div");
    const computerNode = document.createElement("div");
    playerNode.classList.add("board-node");
    playerNode.dataset.index = i;
    computerNode.classList.add("board-node");
    computerNode.dataset.index = i;
    playerNode.addEventListener("click", () => {
      if (!playerNode.classList.contains("selected")) {
        playerNode.classList.add("selected");
        if (player.gameboard.board[i].ship !== null) {
          player.gameboard.board[i].isHit = true;
          player.gameboard.board[i].ship.hit();
          const playerHitNode = document.createElement("div");
          playerHitNode.classList.add("player-hit-node");
          playerNode.appendChild(playerHitNode);
        } else {
          player.gameboard.board[i].isMissed = true;
          const playerMissedNode = document.createElement("div");
          playerMissedNode.classList.add("player-missed-node");
          playerNode.appendChild(playerMissedNode);
        }
      }
    });
    computerNode.addEventListener("click", () => {
      if (!computerNode.classList.contains("selected")) {
        computerNode.classList.add("selected");
        if (computer.gameboard.board[i].ship !== null) {
          computer.gameboard.board[i].isHit = true;
          computer.gameboard.board[i].ship.hit();
          const computerHitNode = document.createElement("div");
          computerHitNode.classList.add("computer-hit-node");
          computerNode.appendChild(computerHitNode);
        } else {
          computer.gameboard.board[i].isMissed = true;
          const computerMissedNode = document.createElement("div");
          computerMissedNode.classList.add("computer-missed-node");
          computerNode.appendChild(computerMissedNode);
        }
      }
    });
    playerBoard.appendChild(playerNode);
    computerBoard.appendChild(computerNode);
  }
}

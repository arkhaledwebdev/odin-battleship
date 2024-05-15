import "./style.css";
import { initComputer, initPlayer } from "./controllers/player_controller";
import { createBoard } from "./controllers/board_controller";

// let isPlayerTurn = true;
let player = initPlayer();
let computer = initComputer();
createBoard("player", player);
createBoard("computer", computer);

// const computerNodes = document.querySelectorAll(".computer-board-node");
// computerNodes.forEach((node) => {
//   node.addEventListener("click", () => {
//     const nodeIndex = node.dataset.index;
//     if (!node.classList.contains("selected")) {
//       node.classList.add("selected");
//       if (computer.gameboard.board[nodeIndex].ship !== null) {
//         computer.gameboard.board[nodeIndex].isHit = true;
//         computer.gameboard.board[nodeIndex].ship.hit();
//         const computerHitNode = document.createElement("div");
//         computerHitNode.classList.add("computer-hit-node");
//         node.appendChild(computerHitNode);
//       } else {
//         computer.gameboard.board[nodeIndex].isMissed = true;
//         const computerMissedNode = document.createElement("div");
//         computerMissedNode.classList.add("computer-missed-node");
//         node.appendChild(computerMissedNode);
//       }
//     }
//   });
// });

const resetButton = document.getElementById("start-button");
resetButton.addEventListener("click", () => {
  document.getElementById(`player-board`).replaceChildren();
  document.getElementById(`computer-board`).replaceChildren();
  player = initPlayer();
  computer = initComputer();
  createBoard("player", player);
  createBoard("computer", computer);
});

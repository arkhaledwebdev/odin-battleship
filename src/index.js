import "./style.css";
import { initComputer, initPlayer } from "./controllers/player_controller";
import {
  createBoard,
  updateComputerBoard,
} from "./controllers/board_controller";

let isPlayerTurn = true;
let player = initPlayer();
let computer = initComputer();
createBoard("player", player);
createBoard("computer", computer);
document.getElementById("computer-board").classList.add("selected-turn");

function gameOver() {
  const dialogText = document.getElementById("dialog-text");
  dialogText.textContent = `player 1 has won`;
  document.getElementById("game-over-dialog").showModal();
}

function switchTurn() {
  if (player.isGameOver() || computer.isGameOver()) {
    gameOver();
  }
  isPlayerTurn = !isPlayerTurn;
  if (isPlayerTurn) {
    document.getElementById("computer-board").classList.add("selected-turn");
    document.getElementById("player-board").classList.remove("selected-turn");
  } else {
    document.getElementById("player-board").classList.add("selected-turn");
    document.getElementById("computer-board").classList.remove("selected-turn");
  }
  if (!isPlayerTurn) {
    computer.attackWithAi(player.gameboard);
    updateComputerBoard(player.gameboard.board);
    setTimeout(() => {
      switchTurn();
    }, 500);
  }
}

function addClickListener() {
  const computerNodes = document.querySelectorAll(".computer-board-node");
  computerNodes.forEach((node) => {
    node.addEventListener("click", () => {
      const nodeIndex = node.dataset.index;
      if (!node.classList.contains("selected") && isPlayerTurn) {
        node.classList.add("selected");
        if (computer.gameboard.board[nodeIndex].ship !== null) {
          computer.gameboard.board[nodeIndex].isHit = true;
          computer.gameboard.board[nodeIndex].ship.hit();
          const computerHitNode = document.createElement("div");
          computerHitNode.classList.add("computer-hit-node");
          node.appendChild(computerHitNode);
          switchTurn();
        } else {
          computer.gameboard.board[nodeIndex].isMissed = true;
          const computerMissedNode = document.createElement("div");
          computerMissedNode.classList.add("computer-missed-node");
          node.appendChild(computerMissedNode);
          switchTurn();
        }
      }
    });
  });
}

addClickListener();

const resetButton = document.getElementById("start-button");
resetButton.addEventListener("click", () => {
  player = initPlayer();
  computer = initComputer();
  createBoard("player", player);
  createBoard("computer", computer);
  addClickListener();
});

function createBoard(name, player) {
  const board = document.getElementById(`${name}-board`);
  board.replaceChildren();

  for (let i = 0; i < 100; i += 1) {
    const node = document.createElement("div");
    node.classList.add(`${name}-board-node`);
    node.dataset.index = i;
    if (player.gameboard.board[i].ship !== null && name !== "computer") {
      node.classList.add("has-ship");
    }
    board.appendChild(node);
  }
}

function updateComputerBoard(playerBoard) {
  const playerNodes = document.querySelectorAll(".player-board-node");
  playerNodes.forEach((node) => {
    const nodeIndex = node.dataset.index;
    if (!node.classList.contains("selected")) {
      if (playerBoard[nodeIndex].isHit) {
        node.classList.add("selected");
        const playerHitNode = document.createElement("div");
        playerHitNode.classList.add("player-hit-node");
        node.appendChild(playerHitNode);
      }
      if (playerBoard[nodeIndex].isMissed) {
        node.classList.add("selected");
        const playerMissedNode = document.createElement("div");
        playerMissedNode.classList.add("player-missed-node");
        node.appendChild(playerMissedNode);
      }
    }
  });
}

module.exports = { createBoard, updateComputerBoard };

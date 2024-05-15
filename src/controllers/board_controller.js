function createBoard(name, player) {
  const board = document.getElementById(`${name}-board`);

  for (let i = 0; i < 100; i += 1) {
    const node = document.createElement("div");
    node.classList.add(`${name}-board-node`);
    node.dataset.index = i;
    if (player.gameboard.board[i].ship !== null) {
      node.classList.add("has-ship");
    }
    board.appendChild(node);
  }
}

module.exports = { createBoard };

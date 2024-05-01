export default function createBoard() {
  const playerBoard = document.getElementById("player-board");
  const computerBoard = document.getElementById("computer-board");

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
        const playerSelectedNode = document.createElement("div");
        playerSelectedNode.classList.add("player-selected-node");
        playerNode.appendChild(playerSelectedNode);
      }
    });
    computerNode.addEventListener("click", () => {
      if (!computerNode.classList.contains("selected")) {
        computerNode.classList.add("selected");
        const computerSelectedNode = document.createElement("div");
        computerSelectedNode.classList.add("computer-selected-node");
        computerNode.appendChild(computerSelectedNode);
      }
    });
    playerBoard.appendChild(playerNode);
    computerBoard.appendChild(computerNode);
  }
}

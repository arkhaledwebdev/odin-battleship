class GameNode {
  constructor(x, y) {
    this.position = [x, y];
    this.ship = null;
    this.isMissed = false;
  }
}

module.exports = GameNode;

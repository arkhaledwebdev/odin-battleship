class GameNode {
  constructor(x, y, ship = null, isMissed = false) {
    this.position = [x, y];
    this.ship = ship;
    this.isMissed = isMissed;
  }
}

module.exports = GameNode;

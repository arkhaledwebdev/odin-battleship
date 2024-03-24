class GameNode {
  constructor(index, x, y, ship = null, isHit = false, isMissed = false) {
    this.index = index;
    this.position = [x, y];
    this.ship = ship;
    this.isHit = isHit;
    this.isMissed = isMissed;
  }
}

module.exports = GameNode;

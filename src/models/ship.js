class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.numberOfHits = 0;
    this.isSunk = false;
  }

  hit() {
    if (this.isSunk === false) {
      this.numberOfHits += 1;
      if (this.numberOfHits === this.length) {
        this.isSunk = true;
      }
    }
  }
}

module.exports = Ship;

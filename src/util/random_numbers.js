function generateRandomShipPositions() {
  const numbers = new Set();

  while (numbers.size < 5) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

module.exports = { generateRandomShipPositions, generateRandomNumber };

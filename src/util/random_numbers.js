function generateRandomShipPositions() {
  const numbers = new Set();

  while (numbers.size < 5) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 5);
}

module.exports = { generateRandomShipPositions, generateRandomNumber };

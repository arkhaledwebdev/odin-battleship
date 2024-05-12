const randomNumbers = require("../util/random_numbers");

test("test generate random ship positions", () => {
  expect(randomNumbers.generateRandomShipPositions()[0]).toBeGreaterThanOrEqual(
    0,
  );
  expect(randomNumbers.generateRandomShipPositions()[0]).toBeLessThan(10);
  expect(randomNumbers.generateRandomShipPositions()[1]).toBeGreaterThanOrEqual(
    0,
  );
  expect(randomNumbers.generateRandomShipPositions()[0]).toBeLessThan(10);
});

test("test generate random numbers", () => {
  expect(randomNumbers.generateRandomNumber(10)).toBeGreaterThanOrEqual(0);
  expect(randomNumbers.generateRandomNumber(10)).toBeLessThan(10);
});

const Ship = require("../models/ship");

test("test the hit function of the ship", () => {
  const carrier = new Ship("carrier", 5);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.numberOfHits).toEqual(5);
  expect(carrier.isSunk).toEqual(true);
});

test("test the isSunk function of the ship", () => {
  const boat = new Ship("boat", 2);
  boat.hit();
  expect(boat.numberOfHits).toEqual(1);
  expect(boat.isSunk).toEqual(false);
});

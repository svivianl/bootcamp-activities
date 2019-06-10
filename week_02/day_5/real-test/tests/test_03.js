const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const range = require("../answers/03").range;

describe('range', () => {
  it("range(5, false, false) => 0..4 => [0, 1, 2, 3, 4]", () => {
    const result = range(5, false, false);

    assert.deepEqual([0, 1, 2, 3, 4], result);
  });

  it("range(7, true, false) => 1..7 => [1, 2, 3, 4, 5, 6, 7]", () => {
    const result = range(7, true, false);

    assert.deepEqual([1, 2, 3, 4, 5, 6, 7], result);
  });

  it("range(5, false, true) => 4..0 => [4, 3, 2, 1]", () => {
    const result = range(5, false, true);

    assert.deepEqual([4, 3, 2, 1, 0], result);
  });

  it("range(7, true, true) => 7..1 => [7, 6, 5, 4, 3, 2, 1]", () => {
    const result = range(7, true, true);

    assert.deepEqual([7, 6, 5, 4, 3, 2, 1], result);
  });

  it("range(2) => range(2, false, false) => 0..1 => [0, 1]", () => {
    const result = range(2);

    assert.deepEqual([0, 1], result);
  });

  it("range(1) => range(1, false, false) => 0..0 => [0]", () => {
    const result = range(1);

    assert.deepEqual([0], result);
  });

  it("range(0, false, true) => no integers to generate => []", () => {
    const result = range(0, false, true);

    assert.deepEqual([], result);
  });

  it("returns empty array for string-based numerical input", () => {
    const result = range("5", true, true);

    assert.deepEqual([], result);
  })
});

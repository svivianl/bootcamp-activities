const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const { countWhich } = require("../answers/02");

describe('countWhich', () => {
  it("takes in a list of numbers, callback checks modulo of 2\ncountWhich([2, 4, 5, 7, 8, 10, 11], (x) => x % 2 === 0)", () => {
     let result = countWhich([2, 4, 5, 7, 8, 10, 11], (x) => x % 2 === 0);

     assert.equal(4, result);
  });

  it("takes in a list of numbers, callback looks for numbers > 10, none exist\ncountWhich([7, 8, 9, 10], (x) => x > 10)", () => {
    let result = countWhich([7, 8, 9, 10], (x) => x > 10);

    assert.equal(0, result);
  });

  it("takes in a list of words(strings), testing if each word contains two e's\ncountWhich(['cheese', 'breeze', 'knees', 'bees'], (word) => /ee/.test(word))", () => {
    let result = countWhich(["cheese", "breeze", "knees", "bees"], (word) => /ee/.test(word));

    assert.equal(4, result);
  });

  it("returns false if it doesn't get an array as the first param: \ncountWhich('cheesy breezy kneesy beesy yeezy', () => {})", () => {
    let result = countWhich("cheesy breezy kneesy beesy yeezy", () => {});

    assert.ok(!result);
  })
});

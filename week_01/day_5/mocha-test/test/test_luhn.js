var assert = require("chai").assert;
var luhnCode = require("../lib/luhn");

console.log(luhnCode);

describe("Luhn Algorithm", function() {
  it("should return TRUE if the check digit is right", function() {
    var number = 4847352989263094;
    assert.isTrue(luhnCode.checkDigit(number));
  });

  it("should return FALSE if the check digit is wrong", function() {
    var number = 48473529892094;
    assert.isFalse(luhnCode.checkDigit(number));
  });
});

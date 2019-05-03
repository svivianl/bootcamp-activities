const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../name-formatter.js');

describe('invert name', () => {

  const nameFormatter = new NameFormatter();

  context('when non honorific', () => {

    it('should throw an error when name is undefined', () => {
      const inputName = undefined;
      assert.throws(nameFormatter.invertName, Error, "No name!");
    });

    it('should return an empty string when passed an empty string', () => {
      const inputName = "";
      const expectedOutput = "";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return a single name when passed a single name', () => {
      const inputName = "Steve";
      const expectedOutput = "Steve";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return a last-name, first-name when passed a first and last-name', () => {
      const inputName = "Steve Rogers";
      const expectedOutput = "Rogers, Steve";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should eliminate extra spaces', () => {
      let inputName = "Steve ";
      let expectedOutput = "Steve";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);

      inputName = "Steve  Rogers";
      expectedOutput = "Rogers, Steve";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
  });

  context('when honorific', () => {

    it('should return an empty string when passed a single honorific', () => {
      const inputName = "Dr. ";
      const expectedOutput = "";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return first-name when passed first-name', () => {
      const inputName = "Dr. Stephen";
      const expectedOutput = "Dr. Stephen";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return a last-name, first-name when passed first-name last-name', () => {
      const inputName = "Dr. Stephen Strange";
      const expectedOutput = "Dr. Strange, Stephen";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it('should return a last-name, first-name when passed first-name last-name with extra spaces around the words', () => {
      const inputName = "Dr.  Stephen  Strange";
      const expectedOutput = "Dr. Strange, Stephen";
      assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    context('when passed first-name last-name Jr.', () => {
      it('should return first-name last-name, Jr. ');
    })
  });
});


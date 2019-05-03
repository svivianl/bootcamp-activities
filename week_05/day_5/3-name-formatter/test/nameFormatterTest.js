const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../name-formatter.js');
NameFormatter.test();
/*
// nameFormatter.js
// nameFormatter.js
// nameFormatter.js
// nameFormatter
describe('invert name', function() {

  it('should return an empty string when passed an empty string', function() {
    const nameFormatter = new NameFormatter();
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
  });

// return an empty string when passed an empty string
// input: ""
// output: ""
// return a single name when passed a single name
// input: "name"
// output: "name"
// return a single name when passed a single name with extra spaces
// input: " name "
// output: "name"
// return a last-name, first-name when passed a first and last-name
// input: "first last"
// output: "last, first"
// return a last-name, first-name when passed a first and last-name with extra spaces around the names (You may want to use regular expressions to detect the whitespace)
// input: " first last"
// output: "last, first"
// return an empty string when passed a single honorific
// input: "Dr. "
// output: ""
// return honorific first-name when passed honorific first-name
// input: "Dr. first"
// output: "Dr. first"
// return a honorific last-name, first-name when passed honorific first-name last-name
// input: "Dr. first-name last-name"
// output: "Dr. last-name, first-name"
// return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
// input: " Dr. first-name last-name "
// output: "Dr. last-name, first-name"
// throw an error when name is undefined
// input: undefined
// output: throw 'Error'
// In the English language, an English honorific is a title prefixing a person's name. Examples of honorifics:

// Mr.
// Mrs.
// Ms.
// Dr.


});
*/

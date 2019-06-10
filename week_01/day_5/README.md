# [Modules and Testing](https://github.com/daegren/lhl-web-w1d5-apr1-modules-testing)

## Modules

### What?
Modules are just JavaScript files which export values for other JavaScript files to consume.

### Why?
A large reason for modularizing our code is to avoid massive files which contain all of the logic for a given application. Modules in NodeJS allows us to split out our code into multiple files, each of which can focus on a specific part of our applications.

This also allows us to abstract and encapsulate various parts of our applications so not everything is dealing with everything.

### How?
Each module has a special variable called module which we can use to define which parts of the file become available to other files.

Really what happens when Node exports a module it wraps it in a function automatically:

```
(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
```

This function provides some interesting variables let's take a look at these below:

* exports (Object): This is an object on which we can add properties to to add to the things which will be exported from this module. This is essentially a shortcut to the module.exports object.
* require (Function): This function is what allows us to require other modules by passing it a path to where the file is located, or just the name of an NPM module. We'll look at using this function a bit more in a few.
* module (module Object): This object contains a bunch of information about the module itself. The module object also contains a key called exports to which we can re-assign if we want to replace the exports object above.
* __filename (string): The file name of the current module. This is the current module file's absolute path.
* __dirname (string): The directory name of the current module.
See more [here](https://nodejs.org/api/modules.html)

## Testing

So far, all of our testing has been done through manual testing; write some code, put in some console.logs and verifying if the result is what we expected. While this works at the level of complexity we've been working at, it will soon become unwieldy as the application starts to grow.

[Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)
Both Mocha & Chai help us with testing our code, but each of these packages handle a separate part of the testing problem.

### Mocha
Mocha is a test runner, which means it provides us a framework in which to write and run our tests.

### Chai
Chai on the other hand provides us with tools to make assertions about the code we're running. Allowing us to verify that the functions we're writing are doing what we expect.

Chai has many different ways to approach the assertions, we'll be using the expect versions but there are others you can explore here.

### Example
Let's say we want to test the add function above. We would be able to define a test file which looks something like the following:
```
var chai = require("chai");
var expect = chai.expect;
var add = require("../add.js");

// Describe the add function
describe("add", function() {
  // Test to make sure that 2 + 2 === 4;
  // `it` defines tests that will run against our code
  // (in this case the add function)
  it("should produce 4 when adding 2 and 2", function() {
    var result = add(2, 2);
    expect(result).to.equal(4);
  });
});
```
Also, to help us get going with our tests, we'll update the scripts section of our `package.json` file to make testing simple.
```
{
  // ...
  "scripts": {
    "test": "mocha"
  }
  // ...
}
```
Now we can run our tests by executing npm test in the command line.

`$ npm test <path and/or name of the test file>`

# Lecture's notes

- search package.js licenses
- never `git commit`and push node_modules folder because it is created when you `npm install`. Insert the folder on the `.gitignore` file so when you `git add` and `git commit` it does not get the directories/files that are on the `.gitignore` file
- Arrange
- Act: `run test`
- asserting: if it is doing what you expect it to do
- `npm i --save-dev mocha chai`
- create new folder
- write the test on the script of the package.json file: `test: "mocha"`

- be careful with type of for array and null
- book: js the good parts

  

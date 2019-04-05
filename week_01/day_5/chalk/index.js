var chalk = require("chalk");

var message = chalk.hwb(32, 0, 50).bold("Hello ") + chalk.yellow("World");
console.log(message);
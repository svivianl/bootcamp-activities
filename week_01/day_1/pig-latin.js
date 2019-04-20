var myArgs = process.argv.slice(2);
var newStr = '';

myArgs.forEach((arg, i) => {
  if(i > 0){
    newStr += ' ';
  }

  newStr += arg.slice(1) + arg[0] + 'ay';
})

console.log(newStr);
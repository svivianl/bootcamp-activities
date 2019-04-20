var myArgs = process.argv.slice(2);
var newArr = [];

myArgs.forEach(arg =>{
  var newStr = '';

  for(var j = arg.length - 1; j >= 0; j--){
    newStr += arg[j];
  }
  newArr.push(newStr);
})

newArr.forEach(value => console.log(value));
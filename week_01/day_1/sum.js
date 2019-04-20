var myArgs = process.argv.slice(2);
var sum = 0;

try{
  myArgs.forEach(arg =>{
    sum += Number(arg);
  })
}catch(e){
  console.log(e);
}

console.log(sum);

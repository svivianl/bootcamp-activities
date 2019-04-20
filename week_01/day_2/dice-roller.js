var myArgs = process.argv.slice(2);
try{
  var diceNumbers = Number(myArgs[0]);
  console.log(`Rolled ${diceNumbers} dice: ` + diceRoller(diceNumbers).join(', '));
  //console.log(`Rolled ${diceNumbers} dice: ${diceRoller(diceNumbers)}`);

}catch(e){
  console.log(e);
}

function diceRoller(diceNumbers){
  let maxValue = 6;
  let numbers = [];
  for(let i = 0; i < diceNumbers; i ++){
    numbers.push(Math.floor(Math.random() * Math.floor(maxValue) + 1));
  }
  return numbers;
}
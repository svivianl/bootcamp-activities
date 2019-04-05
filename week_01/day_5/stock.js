var stock = [45, 24, 35, 31, 40, 38, 11];
var sortedStock = stock.slice().sort((a,b)=> a - b);

var maxIndex = 0;
var minIndex = 0;
// debugger;
sortedStock.forEach( (value, index) => {
  var newMinIndex = stock.indexOf(sortedStock[index]);
  var newMaxIndex = stock.indexOf(sortedStock[sortedStock.length - 1]);

  if(newMaxIndex - newMinIndex <= 0){
    for(var i = stock.length - 1; i >= 0; i -- ){
      newMaxIndex = stock.indexOf(sortedStock[i]);

      if(newMaxIndex - newMinIndex > 0 && stock[newMaxIndex] - stock[newMinIndex] > stock[maxIndex] - stock[minIndex]){
        maxIndex = newMaxIndex;
        minIndex = newMinIndex;
        break;
      }
    }
  }

});

console.log(`${stock[maxIndex]} - ${stock[minIndex]} = ${stock[maxIndex] - stock[minIndex]}`);

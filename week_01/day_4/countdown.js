var countdownGenerator = function (x) {

  var value = x + 1;

  return function countdown(){
    value --;

    if(value === 0){
      return 'Blast Off!';
    }

    if(value < 0){
      return 'Rockets already gone, bub!';
    }

    return `T-minus ${value}...`;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
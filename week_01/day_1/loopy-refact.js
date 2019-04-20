// range should be an array of 2 numbers representing the start and end values for the loop
// multiples should be an array of 2 numbers representing the multiples you want to replace with words
// words should be an array of 2 strings representing the words that will replace the multiples.
function loopy(range, multiples, words){

  for(var i = range[0]; i <= range[1]; i++){

    var value = '';

    if(i % multiples[0] === 0){
      value += words[0];
    }
    if(i % multiples[1] === 0){
      value += words[1];
    }

    value = value || i;

    console.log(value);
  }

}

loopy([15, 90], [2, 5], ["Batty", "Beacon"]);
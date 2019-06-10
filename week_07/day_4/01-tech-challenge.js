// Given a string, return the character that appears the most # of times in the string.
// If there is a tie, return the character that occurs first.
// i.e. ‘aaaabbbbcd’, return ‘a’

const most = (input) => {

  const inputLetters = input.split('');
  let most = '';
  const letters = {};

  inputLetters.forEach(letter => {

    // if most is empty, insert the letter
    if(!most){
      most = letter;
    }

    if(letters.hasOwnProperty(letter)){
      letters[letter] += 1;
    }else{
      letters[letter] = 1;
    }

    if(most !== letter && letters[most] < letters[letter]){
      most = letter;
    }

  })

  return most;
}

console.log('banana: ', most('banana'));
console.log('aaaabbbbcd: ', most('aaaabbbbcd'));

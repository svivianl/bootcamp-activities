
function countLetters(str){
  var newStr = str.split(' ').join('');
  var obj = {};

  for(var i = 0; i < newStr.length; i++){
    var letter = newStr[i];
    if(obj[letter]){
      // if exists
      obj[letter] += 1;
    }else{
      obj[letter] = 1;
    }

  }

  return obj;
}

console.log(countLetters("lighthouse in the house"));
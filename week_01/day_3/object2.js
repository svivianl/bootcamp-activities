
function countLetters(str){
  var newStr = str.split(' ').join('');
  var obj = {};

  for(var i = 0; i < newStr.length; i++){
    var letter = newStr[i];
    if(obj[letter]){
      // if exists
      obj[letter].push(i);
    }else{
      obj[letter] = [i];
    }

  }

  return obj;
}

console.log(countLetters("lighthouse in the house"));
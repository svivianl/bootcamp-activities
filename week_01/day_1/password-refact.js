var myArgs = process.argv.slice(2);

console.log(obfuscate(myArgs[0]));

function obfuscate(word){
  var password = '';
  for(var i = 0; i < word.length; i++){
    switch(word[i]){
      //Every "a" in the string should be replaced with a "4".
      case 'a':
        password += '4';
        break;
      //Every "e" in the string should be replaced with a "3".
      case 'e':
        password += '3';
        break;
      //Every "o" (oh) in the string should be replaced with a "0" (zero).
      case 'o':
        password += '0';
        break;
      //Every "l" (el) in the string should be replaced with a "1" (one).
      case 'l':
        password += '1';
        break;
      default:
        password += word[i];
    }
  }

    return password;
}
function isPalindrome(s) {
  var newS = s.split(' ').join('');
  var stringReverse = newS.split("").reverse().join("");

  return newS === stringReverse;
}
module.exports = isPalindrome;

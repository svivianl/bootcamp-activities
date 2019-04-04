var words = ["ground", "control", "to", "major", "tom"];

var newMap = function(data, fnName){
  var newArr = [];
  data.forEach((value) => newArr.push(fnName(value)));
  return newArr;
}

var length = newMap(words, function(word) {
  return word.length;
});

console.log(length);

var upperCase = newMap(words, function(word) {
  return word.toUpperCase();
});
console.log(upperCase);

var reverse = newMap(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(reverse);


// var lengths = words.map(word => word.length);
// console.log(lengths);

// var upperCase = words.map(word => word.toUpperCase());
// console.log(upperCase);

// var reverse = words.map(word => word.split('').reverse().join(''));
// console.log(reverse);

// var wordsLength = function(word) {
//   return word.length;
// };

// var lengths = words.map(wordsLength);
// console.log(lengths);




// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });
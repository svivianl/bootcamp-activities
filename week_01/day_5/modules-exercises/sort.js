var list = [];

module.exports.setNum = function(number){
  list.push(number);
};

module.exports.sort = function(){
  var sortedList = list.sort((num1, num2) => num1 - num2);
  return sortedList;
};

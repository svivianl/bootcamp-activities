var list = [12, 346, 342, 657, 23, 67, 245];
var sort = require('./sort');


list.forEach(number => sort.setNum(number));

console.log(`sorted list: ${sort.sort()}`);

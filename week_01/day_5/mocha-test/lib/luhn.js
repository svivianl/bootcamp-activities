module.exports.checkDigit = function(number) {
  return number.toString().split('')
        .reverse()
        // convert the string number into a number
        .map( value => parseInt(value) )
        .map( (value,i) => i % 2 ? value * 2 : value )
        // if the value multiplied by 2 is greater than 9, copy the number, other wise leave it multiplied by 2
        .map( value => value > 9 ? (value % 10) + 1 : value )
        // sum the numbers
        //.reduce( (accum, value) => accum += value );
        .reduce( (accum, value) => accum += value ) % 10 === 0;
}

// var code = 0;

// module.exports.setNum = function(number){
//   console.log('number inner', number);
//   code = number;
// }

// module.exports.checkDigit = function(number) {
//   var checkDigit =
// code.split('')
//         .reverse()
//         .map( (x) => parseInt(x) )
//         .map( (x,idx) => idx % 2 ? x * 2 : x )
//         .map( (x) => x > 9 ? (x % 10) + 1 : x )
//         .reduce( (accum, x) => accum += x ) % 10 === 0;
//         console.log('digit inner', checkDigit);
//         return  checkDigit === number;
// }

// var setNum = function(number){
//   code = number;
// }

// var checkDigit = function(number) {
//   return number.toString().split('')
// //   var checkDigit =
// // code.toString().split('')
//         .reverse()
//         // convert the string number into a number
//         .map( value => parseInt(value) )
//         // the second, forth, ... numbers must be multiplied by 2
//         // .map( (value,i) => {
//         //   debugger;
//         //   if(i % 2 !== 0 ) {
//         //     return value * 2 ;
//         //   }else{
//         //     return value;
//         //   }
//         // })
//         .map( (value,i) => i % 2 ? value * 2 : value )
//         // if the value multiplied by 2 is greater than 9, copy the number, other wise leave it multiplied by 2
//         .map( value => value > 9 ? (value % 10) + 1 : value )
//         // sum the numbers
//         //.reduce( (accum, value) => accum += value );
//         .reduce( (accum, value) => accum += value ) % 10 === 0;
//         // debugger;
//         // return  checkDigit === number;
// }

// // var number = 7992739871;

// // setNum(number);

// // checkDigit(3);

// var number = 4847352989263094;


// console.log(checkDigit(number));



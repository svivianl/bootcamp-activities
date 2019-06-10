"use strict";

/* Question 00

Write a converter that will change Celsius to Fahrenheit and back again.

Your function should take in a number, and a boolean. The number will be the temperature in degrees, and the boolean will be whether to convert from C to F (true) or F to C (false). Your answer should be rounded to one decimal place, and returned as a Number, not a string.

Examples:

- tempConverter(32, true) returns 89.6 as a result
- tempConverter(32, false) returns 0.0 as a result
- tempConverter(98.6, false) returns 37 as a result
- tempConverter("12", <anything>) returns NaN as a result

*/

function tempConverter(value, cToF) {

  let valueConverted = 0;

  if(typeof value !== 'number' ){
    return NaN;
  }

  // convert C to F
  if( cToF ){
    valueConverted = ( value * 9 / 5 + 32 );

  // convert F to C
  }else{
    valueConverted = ( ( value - 32 ) * 5 / 9 );
  }

  return Number( valueConverted.toFixed(1) );

}


// Don't change below:

module.exports = { tempConverter };

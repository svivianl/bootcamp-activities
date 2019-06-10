"use strict";

/* Question 05

Capital case is a specific method of capitalizing the characters of every word in a sentence in order
to make it usable as a title or headline. Construct the body of the function called titleCase() that
takes a string as the single parameter.

Examples:

- titleCase("this is an example") returns "This Is An Example"
- titleCase("test") returns "Test"
- titleCase("i r cool") returns "I R Cool"
- titleCase("WHAT HAPPENS HERE") returns "What Happens Here"
- titleCase("") returns ""
- titleCase("A") returns "A"

*/

function titleCase(text) {

  return text.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());

  // var textArray = text.toLowerCase().split(' ');
  // var outputText = '';

  // textArray.forEach( ( word, index ) => {
  //   let newWord = word.charAt(0).toUpperCase()  + word.slice(1);

  //   if(index === 0){
  //     outputText = newWord;
  //   }else{
  //     outputText += ' ' + newWord;
  //   }
  // });

  // return outputText;

}


// Don't change below:

module.exports = { titleCase };

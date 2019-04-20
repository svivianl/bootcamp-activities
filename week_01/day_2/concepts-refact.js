/*
/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
function joinList(conceptList){
  if(conceptList.length === 0){
    return '';
  }

  var concept = conceptList[0];
  for(var i = 1; i < conceptList.length; i++){
    concept += ', ' + conceptList[i];
  }
  return concept;
}

console.log("Today I learned about " + joinList(conceptList) + ".");


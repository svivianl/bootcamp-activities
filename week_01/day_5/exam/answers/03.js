/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
  var obj = {};

  arr.forEach(value => {
    obj.hasOwnProperty(value) ? obj[value] ++ : obj[value] = 1;
  });

  var maxOcc = 0;
  var number;
  for( var i = 0; i < Object.values(obj).length; i++){
    if(Object.values(obj)[i] > maxOcc){
      maxOcc = Object.values(obj)[i];
      number = Object.keys(obj)[i];
    }
  }

  return number;
}

// Don't change below:

module.exports = { mode: mode };

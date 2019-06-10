/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
function round(number) {
  return Math.round(number * 100) / 100;
}

function median(arr) {
  var sortedArr = arr.sort( (a, b) => a - b);
  var index = 0;

  if(arr.length % 2 === 0){
    index = Math.trunc(arr.length / 2);
    return round((sortedArr[index - 1] + sortedArr[index]) / 2);

  }

  index = Math.trunc(arr.length / 2);
  return round(sortedArr[index]);
}

// Don't change below:

module.exports = { median: median };

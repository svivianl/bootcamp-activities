/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  return arr.length;
}

/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const reducer = (acc, currentValue) => acc + currentValue;

function sum(arr) {
  if(arr.length === 0){
    return 0;
  }
  return arr.reduce(reducer);
}

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function round(number) {
  return Math.round(number * 100) / 100;
}

function mean(arr) {
  if(arr.length === 0){
    return null;
  }
  return round(sum(arr) / arr.length);
}

// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };

// This function should check if any two numbers in that array can be added together to equal the input number.
// Have the function return true if two numbers in that array can be added together to equal that number. Otherwise, return false.

function arrayContainsSum(array, sum) {

  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = element1 + element2;

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }

  return false;
}

console.log(arrayContainsSum([0, 2, 4, 7, 9, 10], 6 ));// true
console.log(arrayContainsSum([0,2,4,7,9,10], 15));  // false

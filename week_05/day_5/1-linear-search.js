// Linear Search function
// (3 * n) + 4
//
function search(array, item) {
  let index = null;

  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i;
      break;
    }
  }

  return index;
}


search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);

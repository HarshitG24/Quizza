/**
 * @typedef {Function} shuffle
 * @param {Array} arr - Takes an array of all the dataset of category selected by user
 * @returns {Array}
 * @description shuffles the original array in random order
 */
function shuffle(arr) {
  let j, x, index;
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}

export { shuffle };

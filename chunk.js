// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, n) {
  let bigArray = [];
  let counter = 1;
  const num = array.length;
  if (array.length <= n) {
    return bigArray.push(array);
  }
  for (let i = 0; i < num; i++) {
    if (counter === n && array.length !== 0) {
      bigArray.push(array.splice(0, n));
      counter = 1;
    } else if (array.length < n) {
      bigArray.push(array)
      return bigArray
    } else {
      counter++;
    }
  }
  return bigArray;
}

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3], 1))
console.log(chunk([1, 2, 3, 4, 5], 3))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))
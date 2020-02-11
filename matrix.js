// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  let startcolumn = n - 1;
  let startrow = 0;
  let endcolumn = 0;
  let endrow = n - 1;
  let counter = 1;
  let container = [];

  while (container.length <= n - 1) {
    container.push([]);
  };

  while (counter <= n ** 2) {
    for (let i = endcolumn; i <= startcolumn; i++) {
      container[startrow][i] = counter;
      counter++;
    } startrow++;

    for (let i = startrow; i <= endrow; i++) {
      container[i][startcolumn] = counter;
      counter++;
    } startcolumn--;

    for (let i = startcolumn; i >= endcolumn; i--) {
      container[endrow][i] = counter
      counter++
    } endrow--

    for (let i = endrow; i >= startrow; i--) {
      container[i][endcolumn] = counter
      counter++
    } endcolumn++
  }
  return container;
}

console.log(matrix(5));
console.log(matrix(6));
console.log(matrix(15));
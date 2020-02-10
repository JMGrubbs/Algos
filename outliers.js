function findOutlier(integers) {
  let evenNum = 0, oddNum = 0, posCheck = '', negCheck = '';
  for (let number of integers) {
    if (number % 2 === 0) {
      evenNum++;
      negCheck = number;
    } else {
      posCheck = number;
      oddNum++;
    }
    if (evenNum === 1 && oddNum > 1) {
      return negCheck
    }
    if (oddNum === 1 && evenNum > 1) {
      return posCheck
    }
  };
}
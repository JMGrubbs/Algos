nums = [2, 4, 6, 3, 8]
function thing(array) {
  let evenNum = 0;
  let oddNum = 0;
  let posCheck = '';
  let negCheck = '';
  for (let number of array) {
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
};
thing(nums);

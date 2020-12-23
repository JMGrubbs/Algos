
const isInt = (n) => {
  return n % 1 === 0;
}

const conversionToBinary = (number) => {
  let newNum = number;
  let dividedNumber = [];
  let diviser = 2
  while (isInt(newNum) === true){
    if (isInt(newNum / diviser) === false && newNum > 1) {
      diviser++;
    }
    else if (newNum > 1){
      newNum = newNum / diviser;
      dividedNumber.push(diviser);
      console.log('newNum:', newNum, 'diviser:', diviser);
    } else {
      break;
    }
  }
  return dividedNumber;
}

console.log(conversionToBinary(91));

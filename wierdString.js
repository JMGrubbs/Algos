function toWeirdCase(string) {
  let array = string.split('');
  let newString = '';
  let place = 0;

  for (let char of array) {
    if (place === 0) {
      newString += char.toUpperCase();
      place++
    } else {
      if (char === ' ') {
        newString += char
        place = 0;
      }
      else if (place % 2 === 0) {
        newString += char.toUpperCase();
        place++
      }
      else {
        newString += char.toLowerCase();
        place++
      }
    }
  }
  return newString;
}
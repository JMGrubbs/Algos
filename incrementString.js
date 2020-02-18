function incrementString(str) {
  let newArr = str.split('');
  let count = 0
  if (str === '') {
    return '1';
  }
  for (let i = newArr.length - 1; i > -1; i--) {
    let char = parseInt(newArr[i]);
    if (char < 9) {
      if (count > 0) {
        newArr[i] = char + count;
        count--;
        return newArr.join('');
      } else {
        newArr[i] = char + 1;
        return newArr.join('');
      }
    } else if (char === 9) {
      newArr[i] = 0;
      if (count > 0) {
        continue;
      } else {
        count++;
      }
    } else if (!Number(char) && count > 0) {
      newArr.splice(i + 1, 0, 1)
      return newArr.join('');
    } else if (!parseInt(char)) {
      newArr.push(1);
      return newArr.join('')
    }
  }
}

console.log('foo002', incrementString('foo001'));
console.log('foo100', incrementString('foo99'));
console.log('foo0089', incrementString('foo0088'));
console.log('foo00101', incrementString('foo00100'));
console.log('1', incrementString(''));
console.log('foo1', incrementString('foo'));
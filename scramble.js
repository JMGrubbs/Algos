function scramble(str1, str2) {
  let str1obj = {};
  let str2obj = {};
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  for (let char of str2Arr) {
    if (str2obj[char]) {
      str2obj[char] += 1;
    }
    else {
      str2obj[char] = 1;
    }
  }
  for (let char of str1Arr) {
    if (str1obj[char] && Object.keys(str2obj).includes(char)) {
      str1obj[char] += 1;
    }
    else {
      if (Object.keys(str2obj).includes(char)) {
        str1obj[char] = 1;
      }
    }
  }
  if (Object.keys(str1obj).length === Object.keys(str2obj).length) {
    for (let char in str2obj) {
      if (!(str2obj[char] && str1obj[char] && str1obj[char] >= str2obj[char])) {
        return false;
      }
    }
  }
  else {
    return false;
  }
  return true;
}
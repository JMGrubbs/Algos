function perms(str) {
  let final = [];

  if (str.length < 2) {
    final.push(str);
    return final
  }

  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let remainingChar = perms(str.substring(0, i) + str.substring(i + 1));
    for (let j = 0; j < remainingChar.length; j++) {
      final.push(firstChar + remainingChar[j]);
    }
  }
  return final;
}

perms('abc');
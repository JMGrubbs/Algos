function pigIt(str) {
  let ss = str.split(' ');
  const isletter = (/^[a-zA-Z]+$/);
  for (let i = 0; i < ss.length; i++) {
    if (ss[i].length === 1 && isletter.test(ss[i])) {
      ss[i] = ss[i] + 'ay';
    } else if (isletter.test(ss[i])) {
      let temp = ss[i].split('');
      let firstLetter = temp.shift();
      temp.push(firstLetter + 'ay');
      ss[i] = temp.join('');
    }
  };
  return ss.join(' ');
}
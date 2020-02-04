function findMissingLetter(x) {
  y = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  s = y.split('')
  nuAry = s.slice(s.indexOf(x[0]), s.indexOf(x[x.length - 1]))
  function arr_diff(a1, a2) {
    let a = [], diff = [];
    for (let i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
    }
    for (let i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]];
      } else {
        a[a2[i]] = true;
      }
    }
    for (let k in a) {
      diff.push(k);
    }
    return diff[diff.length - 1].toString();
  }
  return arr_diff(x, nuAry)
}
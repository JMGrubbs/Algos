function isValidWalk(walk) {
  let n = 0, s = 0, e = 0, w = 0;
  walk.map(der => {
    if (der === 'n') {
      n++;
    } else if (der === 's') {
      s++
    } else if (der === 'e') {
      e++
    } else if (der === 'w') {
      w++
    }
  })
  if (n === s && e === w && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}
function missingValues(arr) {
  let tempArr = arr;
  let elCount = {};
  let ret = [0, 0];
  for (const el in tempArr) {
  elCount[tempArr[el]] ? elCount[tempArr[el]]++ : elCount[tempArr[el]] = 1;
  }
  for (const el in elCount) {
    elCount[el] === 1 ? ret[0] = el: null;
    elCount[el] === 2 ? ret[1] = el: null;
  }
  return ret[0] * ret[0] * ret[1];
}
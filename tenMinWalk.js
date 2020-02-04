function isValidWalk(walk) {
  let e = 0, n = 0, s = 0, w = 0
  function func(ary) {
    for (var i = 0; i < ary.length; ++i) {
      switch (ary[i]) {
        case "n":
          n = n + 1
          break;
        case "s":
          s = s + 1
          break;
        case "w":
          w = w + 1
          break;
        case "e":
          e = e + 1
          break;
      }
    }
  }
  function adding(n, s, e, w) {
    if (n === s && e === w && (n + s + e + w) === 10) {
      return true
    } else {
      return false
    }
  }
  func(walk)
  return adding(n, s, e, w)
}
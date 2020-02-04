function humanReadable(s) {
  HH = 3600
  SS = 60
  let q = Math.floor(s / HH);
  let r = s % HH;
  let q2 = Math.floor(r / SS);
  let r2 = r % SS;
  a = null
  function cal(num) {
    return (num < 10 ? '0' + num : num)
  }
  function main(num) {
    a = cal(q) + ':' + cal(q2) + ':' + cal(r2)
  }
  main(s)
  return a
}
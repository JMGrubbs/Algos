function validate(n) {
  let nu = []
  let temp = 0
  let temp2 = 0
  let sNumber = n.toString();
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    nu.push(+sNumber.charAt(i));
  }
  for (let i = nu.length - 2; i >= 0; i = i - 2) {
    let x = nu[i] * 2
    temp2 = x
    if (x > 9) {
      temp2 = 0
      x = x.toString().split("")
      for (let j = 0; j < x.length; j++) {
        temp2 = temp2 + parseInt(x[j])
      }
    }
    nu.splice(i, 1, temp2)
  }
  for (let i = 0; i < nu.length; i++) {
    temp = temp + nu[i]
  }
  temp = temp % 10
  return (temp === 0 ? true : false)
}
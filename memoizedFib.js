function fib(n) {
  let obj = {};
  let counter = 0
  let counter1 = 0
  function fib2(n) {
    if (n < 2) {
      return n;
    };
    if (obj[n - 1] && obj[n - 2]) {
      return obj[n - 1] + obj[n - 2];
    }
    else if (obj[n - 1] || obj[n - 2]) {
      obj[n - 2] = fib2(n - 2);
      return obj[n] + obj[n - 2];
    }
    else {
      obj[n - 1] = fib2(n - 1);
      obj[n - 2] = fib2(n - 2);
      return obj[n - 1] + obj[n - 2];
    }
  };
  return fib2(n);
}

// function fib(n){
//   if(n < 2){
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

fib(50);
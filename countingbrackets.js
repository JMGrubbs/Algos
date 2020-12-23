function validBraces(thing) {
  let counterB = 0;
  let counterP = 0;
  let counterC = 0;
  let closeCounter = 0;
  let openCounter = 0;
  for (let i = 0; i < thing.length; i++) {
    if (openCounter === closeCounter) {
      openCounter = 0;
      closeCounter = 0;
    }
    if (thing[i] === ')') {
      counterP--;
      closeCounter++;
      if (counterP === -1) {
        return false
      }
      if (closeCounter === 1) {
        if (thing[i - 1] !== '(') {
          return false
        }
      }
      if (closeCounter > 1) {
        if (!thing[openCounter - i] === 'C') {
          return false
        }
      }
    }

    if (thing[i] === ']') {
      counterB--;
      closeCounter++;
      if (counterB === -1) {
        return false
      }
      if (closeCounter === 1) {
        if (thing[i - 1] !== '[') {
          return false
        }
      }
      if (closeCounter > 1) {
        if (!thing[openCounter - i] === '[') {
          return false
        }
      }
    }

    if (thing[i] === '}') {
      counterC--;
      closeCounter++;
      if (counterC === -1) {
        return false
      }
      if (closeCounter === 1) {
        if (thing[i - 1] !== '{') {
          return false
        }
      }
      if (closeCounter > 1) {
        if (!thing[openCounter - i] === '{') {
          return false
        }
      }
    }
    if (thing[i] === '(') {
      openCounter++;
      counterP++;
    }
    if (thing[i] === '[') {
      openCounter++;
      counterB++;
    }
    if (thing[i] === '{') {
      openCounter++;
      counterC++;
    }
  }
  if (openCounter !== closeCounter) {
    return false
  }
  return true;
}


function validBraces(braces) {
  let matches = { '(': ')', '{': '}', '[': ']' };
  let stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

console.log('flase', validBraces('({)}'))
console.log('true', validBraces('({})'))
console.log('flase', validBraces('{(})'))
console.log('true', validBraces('{()}'))
console.log('true', validBraces('[{()}]'))
console.log('flase', validBraces('{([)]}'))
console.log('flase', validBraces('{({)}][}'))
console.log('flase', validBraces('(()({()}[)])'))

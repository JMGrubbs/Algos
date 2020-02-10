function reverseWord(revenseWord) {
  const stringArr = revenseWord.split('');
  let final = '';
  let word = '';

  for (let letter of stringArr) {
    if (letter === ' ') {
      word = word += letter;
      final = final += word;
      word = '';
    } else if (final.length + word.length === stringArr.length - 1) {
      word = letter += word;
      final = final += word;
    } else {
      word = letter += word;
    }
  }
  return final;
}
console.log(reverseWord('poop dog'));
reverseWord('dog poop');
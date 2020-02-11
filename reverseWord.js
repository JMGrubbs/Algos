function spinWords(revenseWord) {
  const stringArr = revenseWord.split('');
  let final = '';
  let revWord = '';
  let forWord = '';

  for (let letter of stringArr) {
    if (letter === ' ') {
      if (forWord.length < 5) {
        forWord = forWord += letter;
        final = final += forWord;
      } else {
        revWord = revWord += letter;
        final = final += revWord;
      }
      revWord = '';
      forWord = '';
    } else if (final.length + revWord.length === stringArr.length - 1) {
      if (forWord.length <= 3) {
        forWord = forWord += letter;
        final = final += forWord;
      } else if (forWord.length >= 4) {
        revWord = letter += revWord;
        final = final += revWord;
      }
    } else {
      forWord = forWord += letter;
      revWord = letter += revWord;
    }
  }
  return final;
}
console.log(spinWords('all the things i needs to know'));
console.log(spinWords('none of the things i dont know'));
function longestWordInString(string) {
  let arrayOfWords = string.split(" ");
  let longestWord = "";

  for(let i=0; i<arrayOfWords.length; i++) {
    if(arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }

  return longestWord;
}

export { longestWordInString };


function duplicateLetters(string) {
  let frequencyOfChar = {}

  for(let index in string) {
    let character = string.charAt(index);
    if(frequencyOfChar[character]) {
      frequencyOfChar[character]++;
    }
    else {
      frequencyOfChar[character] = 1;
    }
  }

  let frequencyArray = Object.values(frequencyOfChar);
  let max = Math.max(...frequencyArray)

  if(max === 1) {
    return false;
  }
  return max;
}

export {
  duplicateLetters,
};

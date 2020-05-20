function sumFibs(number) {
  let prevNumber = 1;
  let currNumber = 1;

  let sumOfOdds = 1;

  while(currNumber <= number) {
    if(currNumber %2 === 1) {
      sumOfOdds += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return sumOfOdds;
}

export {
  sumFibs,
};

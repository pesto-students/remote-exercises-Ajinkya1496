function sumAll(array) {
  let higherNumber = Math.max(...array);
  let lowerNumber = Math.min(...array);
  let sumOfNumbers = 0;

  for(let i=lowerNumber; i<=higherNumber; i++) {
    sumOfNumbers += i;
  }

  return sumOfNumbers;
}

export {
 sumAll,
};

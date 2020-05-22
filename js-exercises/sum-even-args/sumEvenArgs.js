const sumEvenArgs = (...args) => {
  let sum = 0;
  for(let number of args) {
    if(isEven(number)) sum += number;
  }

  return sum;
};

function isEven(number) {
  return number % 2 === 0;
}

export { sumEvenArgs };
function sumPrimes(n) {
  let sumOfPrimes = 0;

  for(let i=2; i<=n; i++) {
    if(isPrime(i)) {
      sumOfPrimes += i;
    }
  }

  return sumOfPrimes;
}

function isPrime(number) {
  for(let j=2; j<number; j++) {
    if(number % j === 0) {
      return false;
    }
  }
  return true;
}

export {
  sumPrimes,
};

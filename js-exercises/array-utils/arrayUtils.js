function forEach(array, callbackFn) {
  if(!array.length) throw new TypeError('Passed argument is not an array');

  if(typeof callbackFn !== "function") throw new TypeError('Requires a callback function to execute');

  let arrayLength = array.length;
  
  for(let i = 0; i < arrayLength; i++) {
    if(array[i]) {
      callbackFn(array[i], i, array)  
    }
  }

  return;
}

function map(array, callbackFn) {
  let resultingArray = [];
  if(!array.length) throw new TypeError('Passed argument is not an array');

  if(typeof callbackFn !== "function") throw new TypeError('Requires a callback function to execute');

  let arrayLength = array.length;
  
  for(let i = 0; i < arrayLength; i++) {
    if(array[i]) {
      resultingArray.push(callbackFn(array[i], i, array));
    }
  }

  return resultingArray;
}

function filter(array, callbackFn) {
  let resultingArray = [];
  if(!array.length) throw new TypeError('Passed argument is not an array');

  if(typeof callbackFn !== "function") throw new TypeError('Requires a callback function to execute');

  let arrayLength = array.length;
  
  for(let i = 0; i < arrayLength; i++) {
    if(array[i]) {
      if(callbackFn(array[i], i, array))
      resultingArray.push(array[i]);
    }
  }

  return resultingArray;
}

export {
  forEach,
  map,
  filter,
  // reduce,
}
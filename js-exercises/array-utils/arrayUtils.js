function ToObject(value) {
  if(typeof value === undefined) {
    throw new TypeError("this is undefined")
  }
  else if(value === null) {
    throw new TypeError("this is null")
  }
  else if(typeof value === "boolean") {
    return new Boolean(value);
  }
  else if(typeof value === "number") {
    return new Number(value);
  }
  else if(typeof value === "string") {
    return new String(value);
  }
  else if(typeof value === "symbol") {
    return Symbol(value);
  }
  else if(typeof value === "object" && value !== null) {
    return value;
  }
}

function HasProperty(O, Pk) {
  return O.hasOwnProperty(Pk);
}

function ToBoolean(value) {
  if(typeof value === undefined) {
    return false;
  }
  else if(value === null) {
    return false;
  }
  else if(typeof value === "boolean") {
    return value;
  }
  else if(typeof value === "number") {
    if(value === 0 || value === -0 || value === NaN) {
      return false;
    }
    return true;
  }
  else if(typeof value === "string") {
    if(value.length === 0)  {
      return false;
    }
    return true;
  }
  else if(typeof value === "symbol") {
    return true;
  }
  else if(typeof value === "object" && value !== null) {
    return true;
  }
}

function forEach(callbackFn, thisArg) {
  let O = ToObject(this);
  let len = O['length'];
  if(typeof callbackFn !== "function") {
    throw new TypeError("Parameter passed as callback function is not a function");
  }

  let T = thisArg !== undefined? thisArg: undefined;

  let k = 0;

  while(k < len) {
    let Pk = k.toString();
    let kPresent = HasProperty(O, Pk);
    if(kPresent) {
      let kValue = O[Pk];
      callbackFn.call(T, kValue, k, O);
    }

    k += 1;
  }

  return undefined;
}

function map(callbackFn, thisArg) {
  let O = ToObject(this);
  let len = O['length'];

  if(typeof callbackFn !== "function") {
    throw new TypeError("Parameter passed as callback function is not a function");
  }

  let T = thisArg !== undefined? thisArg : undefined;

  let A = new Array(len);

  let k = 0;

  while(k < len) {
    let Pk = k.toString();
    let kPresent = HasProperty(O, Pk);
    if(kPresent) {
      let kValue = O[Pk];
      let mappedValue = callbackFn.call(T, kValue, k, O);
      A[k] = mappedValue;
    }
    k += 1;
  }

  return A;
}

function filter(callbackFn, thisArg) {
  let O = ToObject(this);
  let len = O['length'];
  
  if(typeof callbackFn !== "function") {
    throw new TypeError("Parameter passed as callback function is not a function");
  }

  let T = thisArg !== undefined? thisArg : undefined;

  let A = new Array(0);

  let k = 0;

  let to = 0;

  while(k < len) {
    let Pk = k.toString();
    let kPresent = HasProperty(O, Pk);
    if(kPresent) {
      let kValue = O[Pk];
      let selected = ToBoolean(callbackFn.call(T, kValue, k, O));
      if(selected === true) {
        A[to] = kValue;
        to += 1;
      }
    }
    k += 1;
  }

  return A;
}

function reduce(callbackFn, thisArg) {
  let O = ToObject(this);
  let len = O['length'];

  if(typeof callbackFn !== "function") {
    throw new TypeError("Parameter passed as callback function is not a function");
  }

  if(len === 0) {
    throw new TypeError("Length is 0");
  }

  let k = 0;
  let accumulator = undefined;

  if(arguments.length >= 2) {
    accumulator = arguments[1];
  }
  else{
    while(k < len && !(k in O)) {
      k += 1;
    }
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = O[k++];
  }

  while(k < len) {
    let Pk = k.toString();
    let kPresent = HasProperty(O, Pk);
    if(kPresent === true) {
      let kValue = O[Pk];
      accumulator = callbackFn.call(undefined, accumulator, kValue, O)
    }
    k += 1;
  }

  return accumulator;
}


export {
  forEach,
  map,
  filter,
  reduce,
}
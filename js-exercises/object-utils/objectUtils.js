// your implementation
function map(object, callback) {
  let properties = Object.getOwnPropertyNames(object);
  let entries = getEntries(properties, object);

  return Object.fromEntries(entries.map(callback));
}

function filter(object, callback) {
  let properties = Object.getOwnPropertyNames(object);
  let entries = getEntries(properties, object);

  return Object.fromEntries(entries.filter(callback));
}

function invert(object) {
  let properties = Object.getOwnPropertyNames(object);
  let entries = getEntries(properties, object);

  return Object.fromEntries(entries.map(([key, value]) => [value, key]));
}

function merge(...args) {
  return args.reduce(
    (target, currentObject) => Object.assign(target, currentObject)
  )
}

function all(array, callback) {
  return array.every(callback);
}

function some(array, callback) {
  return array.some(callback);
}

function getEntries(properties, object) {
  let entries = [];
  for(let property of properties){
    entries.push([property, object[property]]);
  }
  return entries;
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};

var cacheFunction = function() {
  var cache = {};

  function caching(value) {
    var cachedValue;

    if(value in cache) {
      cachedValue = cache[value];
    }
    else {
      cachedValue = value;
      cache[value] = cachedValue;
    }

    return cachedValue;
  }

  return caching;
}

export {
  cacheFunction,
};

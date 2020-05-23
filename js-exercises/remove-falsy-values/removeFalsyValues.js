function removeFalsyValues(array) {
  let truthyValues = array.filter(element => Boolean(element));
  return truthyValues;
}

export {
  removeFalsyValues,
};
function diffArray(array1, array2) {
  //elements in the array 1 which are not there in the array 2
  let difference1 = array1.filter(x => array2.indexOf(x) === -1);

  //elements in the array 2 which are not there in the array 1
  let difference2 = array2.filter(x => array1.indexOf(x) === -1);

  let difference = difference1.concat(difference2);

  return difference;
}

export {
  diffArray,
};

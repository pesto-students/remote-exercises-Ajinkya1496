function diffArray(array1, array2) {
  //elements in the array 1 which are not there in the array 2
  let difference1 = array1.filter(element => array2.indexOf(element) === -1);

  //elements in the array 2 which are not there in the array 1
  let difference2 = array2.filter(element => array1.indexOf(element) === -1);

  let difference = difference1.concat(difference2);

  return difference;
}

export {
  diffArray,
};

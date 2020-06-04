function freqSort(array) {
  let freqOfElements = {};
  let uniqueElements = [];

  array.map((element, index) => {
    if(freqOfElements[element]) {
      freqOfElements[element]++;
    }
    else {
      freqOfElements[element] = 1;
    }
  })
  
  uniqueElements = Object.keys(freqOfElements);

  return uniqueElements.sort(function(element1,element2) {
    return freqOfElements[element2] - freqOfElements[element1];
  })
}


// console.log(freqSort(["a", "z", "z", "z", "b", "b", "z"]));

export {
  freqSort,
};

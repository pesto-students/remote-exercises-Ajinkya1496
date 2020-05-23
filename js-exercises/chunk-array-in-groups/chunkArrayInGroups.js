function chunkArrayInGroups(array, chunkSize) {
  let chunks = [];
  for(let i=0; i<array.length; i+=chunkSize) {
    chunks.push(array.slice(i, i+chunkSize));
  }
  
  return chunks;
}

export {
  chunkArrayInGroups,
};

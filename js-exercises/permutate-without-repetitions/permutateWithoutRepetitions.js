/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
    if(Array.isArray(permutationOptions) !== true) {
        throw new TypeError(`Expected Array got ${typeof permutationOptions}`);
    }
    
    if (permutationOptions.length === 1) {
        return [permutationOptions];
      }

      const permutationsArray = [];

      const smallPerm = permutateWithoutRepetitions(permutationOptions.slice(1));

      const firstElement = permutationOptions[0];
    
      for (let i = 0; i < smallPerm.length; i ++) {
        const permutation = smallPerm[i];

        for (let j = 0; j <= permutation.length; j++) {
          permutationsArray.push(permutation.slice(0, j).concat([firstElement], permutation.slice(j)));
        }
      }
    
      return permutationsArray;
}

// console.log(permutateWithoutRepetitions(['A', 'B', 'C']));

export { permutateWithoutRepetitions };

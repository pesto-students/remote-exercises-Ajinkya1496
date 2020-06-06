const countingAnagrams = str => {
    if(typeof str !== "string") throw new TypeError("Expected string got "+typeof str);

    let arrayOfStrings = str.split(' ');
    let anagrams = {};
    for(let string of arrayOfStrings) {
        if(string.length > 1) {
            let sortedStr = string.split('').sort().join('');
            if(anagrams[sortedStr]) {
                anagrams[sortedStr] ++;
            }
            else{
                anagrams[sortedStr] = 1;
            }
        }
    }

    let anagramValues = Array.from(Object.values(anagrams));
    return anagramValues.every((value) => value > 1) === true? anagramValues.length : 0;
};


export { countingAnagrams };

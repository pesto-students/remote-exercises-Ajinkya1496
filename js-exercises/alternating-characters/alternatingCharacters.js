function alternatingCharacters(arr) {
    let removalCountArray = [];
    for(let element of arr) {
        let removalCount = 0;
       for(let i=0,j=i+1; i<element.length, j<element.length; i++,j++) {
           if(element[i] === element[j]) {
            removalCount++;
           }
       }
       removalCountArray.push(removalCount);
    }

    return removalCountArray;
}

export { alternatingCharacters };

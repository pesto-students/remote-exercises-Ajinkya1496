// Start your implementation here
function bizarreStringIncrementer(string) {

    const regex= /\d+$/;
    const matchResult = string.match(regex);
    if(matchResult === null) {
        return string.concat('1');
    }
    else {
        let oldNumber = matchResult[0];
        let incrementedNumber = parseInt(oldNumber) + 1;
        incrementedNumber = incrementedNumber.toString().padStart(oldNumber.length, 0);

        let incrementedString = string.replace(oldNumber,incrementedNumber);
        return incrementedString;
    }  
}

// console.log(bizarreStringIncrementer("f99oo0099"));
//f99oo0100

export {
    bizarreStringIncrementer,
}
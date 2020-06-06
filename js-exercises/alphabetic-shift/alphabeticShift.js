const alphabeticShift = input => {
  let shiftedString = '';
  if(typeof input !== "string") throw new TypeError("Expected string, got "+typeof input);
  
  for(let i=0;i<input.length;i++) {
    let charCode = input.charCodeAt(i) + 1;
    if(charCode === 123) charCode = 97;
    if(charCode === 91) charCode = 65;

    shiftedString = shiftedString + String.fromCharCode(charCode);
  }

  return shiftedString;
};

export { alphabeticShift };

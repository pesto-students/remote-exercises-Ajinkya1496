function balancedBraces(string) {
  let stack = [];

  let braces = {
    "{": "}",
    "[": "]",
    "(": ")"
  }

  for (let character of string) {
    if (character === "{" || character === "[" || character === "(") {
      stack.push(character);
    } else if (character === "}" || character === "]" || character === ")") {
      if (character !== braces[stack.pop()]) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

export {
  balancedBraces,
};

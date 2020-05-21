import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  it("should return the longest word from the string", () => {
    expect(
      longestWordInString("Everyday counts!")
    ).toBe("Everyday");

    expect(
      longestWordInString("Good code is not 'clever'. It does things in straightforward, obvious ways.")
    ).toBe("straightforward,");

    expect(
      longestWordInString("People ignore design that ignores people.")
    ).toBe("ignores");
  });
});

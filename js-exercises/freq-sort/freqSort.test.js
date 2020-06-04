import { freqSort } from './freqSort';

describe('Template Test', () => {
  it('should return array', () => {
    expect(
      Array.isArray(freqSort([1,2,3,4]))
    ).toBe(true);
  })

  it('should return correct result', () => {
    expect(
      freqSort(["a", "z", "z", "z", "b", "b", "z"])
    ).toEqual(["z", "b", "a"]);

    expect(
      freqSort(["Pune", "Thane", "Pune", "Mumbai", "Pune", "Sangli", "Thane"])
    ).toEqual(["Pune", "Thane", "Mumbai", "Sangli"]);
  })
});

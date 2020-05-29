import { map, filter, invert, merge, all, some } from './objectUtils';

// write your own test cases
describe('object utilities', () => {
  it('Should transform (key, value) pair according to the callback function.', () => {
    let obj = {age: 1, pincode: 411038, ext:20}
    let expObj = {AGE: 10, PINCODE: 4110380, EXT:200}
    expect(
      map(obj,([key, val]) => [key.toUpperCase(), val * 10])
    ).toEqual(expObj);
  });

  it('Should return the object filtering the elements based on the condition in the callback function', () => {
    let obj = {age: 1, pincode: 411038, ext:20}
    let expObj = {pincode: 411038, ext: 20}
    expect(
      filter(obj, ([key, val]) => val % 2 === 0)
    ).toEqual(expObj)
  });

  it('Should invert the (key, value) pairs of an object', () => {
    let obj = {c:1,d:2}
    expect(
      invert(obj)
    ).toEqual({'1':'c', '2':'d'});
  });

  it('Should merge all the objects paased', () => {
    let obj1 = {a:1,b:2};
    let obj2 = {b:3,d:4};
    expect(
      merge(obj1, obj2)
    ).toEqual({a:1,b:3,d:4});
  });
  
  it('Should return appropriate result based on the condition in the callback function', () => {
    let array = [2,3,86,35];
    expect(
      all(array, (element) => element % 2 === 0)
    ).toBe(false);
  });
  
  it('Should return appropriate result based on the condition in the callback function', () => {
    let array = [2,3,86,35];
    expect(
      some(array, (element) => element % 2 === 0)
    ).toBe(true);
  });
});
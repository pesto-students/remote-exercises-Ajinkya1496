// Write your own test cases.
import { forEach, map, filter, reduce } from './arrayUtils';

describe('Array utilities', () => {
    describe('Test Cases for forEach', () => {
        it('for each should return undefined', () => {
            expect(
                forEach.call([1,2,3,4], function(value, index) {
                    // console.log(value);
                })
            ).toBe(undefined);
        })
    
        test('for each should give an error for a non-function value', () => {
            expect( () => {
                forEach.call([1, 2, 3, 4], 'abcd')
            }).toThrowError('Parameter passed as callback function is not a function');
        })  
    })

    describe('Test cases for map', () => {
        it('should return an array', () => {
            expect(
               Array.isArray(map.call([1, 2, 3, 4], (element, index) => element * 2))
            ).toBe(true);
        })

        it('should return a correct array', () => {
            expect(
               map.call([1, 2, 3, 4], (element, index) => element * 2)
            ).toEqual([2, 4, 6, 8]);

            expect(
                map.call([1, ,3, 4], (element, index) => element * 2)
             ).toEqual([2, undefined, 6, 8]);
        })
    
        test('map should give an error for a non-function value', () => {
            expect( () => {
                map.call([1, 2, 3, 4], 'abcd')
            }).toThrowError('Parameter passed as callback function is not a function');
        })
    })

    describe('Test cases for filter', () => {
        it('should return an array', () => {
            expect(
               Array.isArray(filter.call([1, 2, 3, 4], (element, index) => element % 2 == 0))
            ).toBe(true);
        })

        it('should return a correct array', () => {
            expect(
               filter.call([1, 2, 3, 4], (element, index) => element % 2 !== 0)
            ).toEqual([1,3]);

            expect(
                filter.call(['1', , '3', 4], (element, index) => typeof element === "number")
             ).toEqual([4]);
        })  
    })

    describe('Test cases for reduce', () => {
        it('should return a number', () => {
            expect(
               typeof reduce.call([null, , 3, 4], (accumulator, currentValue) => accumulator + currentValue) === "number"
            ).toBe(true);
        })

        it('should return a correct result', () => {
            expect(
               reduce.call([1, 2, 3, 4], (accumulator, currentValue) => accumulator * currentValue)
            ).toEqual(24);

            expect(
                reduce.call([null, undefined, 102, 408], (accumulator, currentValue) => accumulator * currentValue)
             ).toEqual(NaN);
        })  
    })
})
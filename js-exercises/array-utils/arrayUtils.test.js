// Write your own test cases.
import { forEach, map, filter } from './arrayUtils';

describe('Array utilities', () => {
    describe('Test Cases for forEach', () => {
        it('for each should return undefined', () => {
            expect(
                forEach([1,2,3,4], function(value, index) {
                    // console.log(value);
                })
            ).toBe(undefined);
        })
    
        test('for each should give an error for a non-array value', () => {
            expect( () => {
                forEach(1, function(value, index) {})
            }).toThrowError('Passed argument is not an array');
        })
    
        test('for each should give an error for a non-function value', () => {
            expect( () => {
                forEach([1, 2, 3, 4], 'abcd')
            }).toThrowError('Requires a callback function to execute');
        })  
    })

    describe('Test cases for map', () => {
        it('should return an array', () => {
            expect(
               Array.isArray(map([1, 2, 3, 4], (element, index) => element * 2))
            ).toBe(true);
        })

        it('should return a correct array', () => {
            expect(
               map([1, 2, 3, 4], (element, index) => element * 2)
            ).toEqual([2, 4, 6, 8]);

            expect(
                map([1, ,3, 4], (element, index) => element * 2)
             ).toEqual([2, 6, 8]);
        })

        test('map should give an error for a non-array value', () => {
            expect( () => {
                forEach(1, function(value, index) {})
            }).toThrowError('Passed argument is not an array');
        })
    
        test('map should give an error for a non-function value', () => {
            expect( () => {
                forEach([1, 2, 3, 4], 'abcd')
            }).toThrowError('Requires a callback function to execute');
        })
    })

    describe('Test cases for filter', () => {
        it('should return an array', () => {
            expect(
               Array.isArray(filter([1, 2, 3, 4], (element, index) => element % 2 == 0))
            ).toBe(true);
        })

        it('should return a correct array', () => {
            expect(
               filter([1, 2, 3, 4], (element, index) => element % 2 !== 0)
            ).toEqual([1,3]);

            expect(
                filter(['1', , '3', 4], (element, index) => typeof element === "number")
             ).toEqual([4]);
        })  
    })
})
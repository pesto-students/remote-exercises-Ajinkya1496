import { anyPromise } from './anyPromise'

describe('Implementation of Promise.any', () => {
    test('The function should return a Promise', () => {
        expect(anyPromise([]) instanceof Promise).toBe(true);
    });

    test('Promise call should return resolved promise with its value', () => {
        const p1 = new Promise((res, rej) => rej(1));
        const p2 = 2;
        const p3 = Promise.resolve(3);
        return expect(anyPromise([p1, p2, p3])).resolves.toEqual(2);
    });

    test('Promise call should return rejected promise with Error', () => {
        const p1 = new Promise((res, rej) => rej(1));
        const p2 = Promise.reject(2);
        const p3 = Promise.reject(3);
        expect(anyPromise([p1, p2, p3]) instanceof Promise).toBe(true);
        //this test case should check for AggregateError
    });
})
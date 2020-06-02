import { allSettled } from './allSettled';

describe('All settled', () => {
    test('The function should return a promise', () => {
        const promise1 = Promise.resolve(3);
        const promise2 = Promise.reject(4);
        const promises = [promise1, promise2];
        expect(
            allSettled(promises) instanceof Promise
        ).toBe(true);
    })

    test('the function should return appropriate results', () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
        const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 20, 'bar'));
        const promises = [promise1, promise2, promise3];
        const expResult = [
            {status: "fulfilled", value: 3},
            {status: "fulfilled", value: 'bar'},
            {status: "rejected", reason: 'foo'},
        ];
        expect(
            allSettled(promises)
        ).resolves.toEqual(expResult);
    })

    test('sequence of objects inside results array', () => {
        const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 40, 'after 40 ms'));
        const promise2 = new Promise((resolve, reject) => setTimeout(reject, 20, 'after 20 ms'));
        const promises = [promise1, promise2];
        const expResult = [
            {status: "rejected", reason: 'after 20 ms'},
            {status: "fulfilled", value: 'after 40 ms'},
        ];

        expect(
            allSettled(promises)
        ).resolves.toEqual(expResult);
    })
})
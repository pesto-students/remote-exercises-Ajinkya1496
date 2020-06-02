const FULFILLED = "fulfilled";
const REJECTED = "rejected";

async function allSettled(promisesArray) {
    let promiseOutcomes = [];
    let resolvedPromisesCount = 0;
   return new Promise((resolve, reject) => {
        promisesArray.forEach((promise) => {
            Promise.resolve(promise)
            .then(value => {
                promiseOutcomes.push({status: FULFILLED, value: value})
                resolvedPromisesCount += 1;
                if(resolvedPromisesCount === promisesArray.length) {
                    resolve(promiseOutcomes);
                }
            })
            .catch(err => {
                promiseOutcomes.push({status: REJECTED, reason: err})
                resolvedPromisesCount += 1;

                if(resolvedPromisesCount === promisesArray.length) {
                    resolve(promiseOutcomes);
                }
            })
        });
    })
}

// const promise1 = Promise.resolve(3);
//         const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
//         const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 20, 'bar'));
//         const promises = [promise1, promise2, promise3];

// allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result)));

export { allSettled };
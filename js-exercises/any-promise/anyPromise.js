function resolveP(promise) {
    return new Promise((resolve, reject) => {
        return Promise.resolve(promise).then(reject, resolve);
    })
}

function anyPromise(iterable) {
    let arrayFromIterables = Array.from(iterable);
    if(arrayFromIterables.length === 0) {
        return Promise.resolve("Empty Iterable");
    }
    else {
        let promises = [];
        for (let promise of arrayFromIterables) {
            promises.push(resolveP(promise));
        }
        return resolveP(Promise.all(promises)).then(value => {
            return Promise.resolve(value);
        })
        .catch(value => {
            return Promise.reject(new Error("All promises rejected"));
        });
    }
}

export { anyPromise }

// let set = new Set();
// let promise1 = Promise.reject(1);
// let promise2 = Promise.reject(2);
// let promise3 = Promise.reject(3);
// let promise4 = Promise.reject(4);

// set.add(promise1);
// set.add(promise2);
// set.add(promise3);

// anyPromise(set) //promise1, promise3, promise2
//     .then(value => console.log("Then: ", value))
//     .catch(err => console.log("Catch: ", err));
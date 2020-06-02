const allPromises = args => {
    return new Promise((resolve, reject) => {
        let promises = args;
        let promiseValues = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                promiseValues[index] = value;
                completedPromises += 1;

                if (completedPromises === promises.length) {
                    resolve(promiseValues);
                }
            }).catch(err => reject(err));
        });
    })
};

export { allPromises };

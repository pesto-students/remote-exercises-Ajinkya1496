function negativeIndex(array) {
    if(Array.isArray(array) === false) {
        throw new TypeError("Only arrays are supported")
    }
    return new Proxy(array, {
        get(target, prop) {
            const index = Number(prop);
            if(index < 0) {
                const actualIndex = index + target.length;
                return target[actualIndex];
            }
            return target[prop];
        },
        set(target, prop, value) {
            const index = Number(prop);
            if(index < 0) {
                const actualIndex = index + target.length;
                target[actualIndex] = value;
                return true;
            }
            target[prop] = value;
            return true;
        }
    })
}

export { negativeIndex };

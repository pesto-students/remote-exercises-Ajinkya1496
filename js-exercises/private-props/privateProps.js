function privateProps(obj, isPrivate) {
    return new Proxy(obj, {
        set(target, prop, value) {
            if(isPrivate(prop)) {
                throw new TypeError("Can't set property "+prop);
            }
            else {
                target[prop] = value;
                return true;
            }
        },
        has(target, prop) {
            if(isPrivate(prop)) {
                return false;
            }
            else true;
        },
        ownKeys(target) {
            let allKeys = Object.keys(target);
            return allKeys.filter((key) => !isPrivate(key));
        }
    })

}

export { privateProps };

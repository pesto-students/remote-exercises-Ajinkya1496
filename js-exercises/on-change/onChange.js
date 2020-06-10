const onChange = (obj, onChangeFn) => {
    const handler = {
        get(target, prop) {
            const value = Reflect.get(target, prop);
            if (typeof value === 'object') {
                return new Proxy(value, handler);
            }
            return value;
        },
        set(target, prop, value) {
            onChangeFn();
            return Reflect.set(target, prop, value);
        },
        defineProperty(target, prop, descriptors) {
            onChangeFn();
            return Reflect.defineProperty(target, prop, descriptors);
        },
        deleteProperty(target, prop) {
            onChangeFn();
            return Reflect.deleteProperty(target, prop);
        }
    }
    return new Proxy(obj, handler);
};

export { onChange };

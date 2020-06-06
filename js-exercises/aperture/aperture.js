function aperture(tupleSize, list) {
    let listOfTuples = [];
    if (typeof tupleSize !== "number") {
        throw new TypeError("First argument to the function is expcted to be of type number")
    }

    if (!Array.isArray(list)) {
        throw new TypeError("Second argument to the function is expcted to be of type array")
    }

    if (tupleSize > list.length) {
        return listOfTuples;
    }
    
    list.some((_, i) => {
        if(i + tupleSize > list.length) return true;
        listOfTuples.push(list.slice(i, i + tupleSize));
    })

    return listOfTuples;
}


export { aperture };

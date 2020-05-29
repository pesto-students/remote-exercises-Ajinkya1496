function minima(maxNumberstoReturn, array) {
    array.sort((element1, element2) => element1-element2);

    return array.filter((_, index) => index < maxNumberstoReturn)
}

export { minima };

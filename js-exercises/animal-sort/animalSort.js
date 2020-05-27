const animalSort = animals => {
    animals.sort(function(obj1, obj2) {
        if (obj1.numberOfLegs < obj2.numberOfLegs) return -1;
        if (obj1.numberOfLegs > obj2.numberOfLegs) return 1;

        if (obj1.name < obj2.name) return -1;
        if (obj1.name > obj2.name) return 1;
    });

    return animals;
};

export { animalSort };

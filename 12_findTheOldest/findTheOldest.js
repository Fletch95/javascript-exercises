const findTheOldest = function(array) {
    year = new Date().getFullYear();

    const ordered = array.sort(function(a, b) {
        if (!("yearOfDeath" in a)) {
            a.yearOfDeath = year;
        };

        if (!("yearOfDeath" in b)) {
            b.yearOfDeath = year;
        };

        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1;
    });

    console.table(ordered);
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
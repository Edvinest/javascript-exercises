const findTheOldest = function (people) {
    const now = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : now - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : now - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

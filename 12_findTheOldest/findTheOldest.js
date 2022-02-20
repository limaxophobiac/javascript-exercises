const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let theOldest = people.reduce((oldest, current) => {
        let currentLife;
        let oldestLife;
        if (current.hasOwnProperty('yearOfDeath')){
            currentLife = current.yearOfDeath - current.yearOfBirth;
        }
         else {
            currentLife = new Date().getFullYear() - current.yearOfBirth;
        }
        if (oldest.hasOwnProperty('yearOfDeath')){
            oldestLife = oldest.yearOfDeath - oldest.yearOfBirth;
        }
         else {
            oldestLife = new Date().getFullYear() - oldest.yearOfBirth;
        }

        if (currentLife >= oldestLife){
            return current;
        }
        return oldest;
    }, {name: "", yearOfDeath: -1, yearOfBirth: 0});
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;

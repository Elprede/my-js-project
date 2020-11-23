const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ]

let findTheOldest = function(people) {
    let oldest = 0;
    let livedAge = 0;
    const oldestYear = people.reduce(function(obj, item) {
        livedAge = item.yearOfDeath === undefined ? new Date().getFullYear() - item.yearOfBirth : item.yearOfDeath - item.yearOfBirth;
        if (livedAge >= oldest) {
            obj = item;
            oldest = livedAge;
        }
        return obj;
    
    }, {});
    return oldestYear;
}



module.exports = findTheOldest

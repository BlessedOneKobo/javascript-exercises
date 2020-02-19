let findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const ageForOldestPerson = calculateAge(oldestPerson);
    const ageForCurrentPerson = calculateAge(currentPerson);

    if (ageForCurrentPerson > ageForOldestPerson) {
      return currentPerson;
    }

    return oldestPerson;
  });
}

function calculateAge(personObj) {
  // Handle dead people
  if (personObj.yearOfDeath) {
    return personObj.yearOfDeath - personObj.yearOfBirth;
  }

  // Handle living people
  return (new Date()).getFullYear() - personObj.yearOfBirth;
}

module.exports = findTheOldest

const repeatString = function(str, repetitions) {
  if (repetitions < 0) {
    return 'ERROR';
  }

  let strRepeated = '';

  for (let i = 0; i < repetitions; i++) {
    strRepeated += str;
  }

  return strRepeated;
}

module.exports = repeatString

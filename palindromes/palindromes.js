const palindromes = function(str) {
  const punctuationAndSpace = ['.', ',', '!', ' '];
  // Convert str to an array of lower case characters with no punction,
  // or whitespace characters. Makes processing easy
  const arr = [...str]
                .filter(character => !punctuationAndSpace.includes(character))
                .map(character => character.toLowerCase());

  // Compare characters from the beginning to the midway point
  const midPoint = Math.floor(arr.length / 2);
  const lastElementIndex = arr.length - 1;
  for (let i = 0; i < midPoint; i++) {
    if (arr[i] !== arr[lastElementIndex - i]) {
      return false;
    }
  }

  return true;
}

module.exports = palindromes

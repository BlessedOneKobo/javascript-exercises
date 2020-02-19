// Char Code for upper and lower limits of the Latin alphabet
const firstLetterLowerCharCode = 'a'.charCodeAt(0);
const firstLetterUpperCharCode = 'A'.charCodeAt(0);
const lastLetterLowerCharCode = 'z'.charCodeAt(0);

// Main function
const caesar = function(plain, shift = 0) {
  let cipher;
  const punctuationAndSpace = ['.', ',', '!', ' '];

  // Convert plaintext string to an array for ease-of-manipulation
  const arr = [...plain].map((ch) => {
    if (punctuationAndSpace.includes(ch)) {
      return ch;
    }
    
    return shiftCharCode(ch, shift);
  });

  return arr.join('');
}

// Encrypt charCode
function shiftCharCode(char, shiftFactor) {
  const latinCode = convertToLatinCode(char);
  const shiftedLatinCode = shiftLatinCode(latinCode, shiftFactor);
  const shiftedCharCode = convertToCharCode(shiftedLatinCode, checkForLowerCase(char));

  return String.fromCharCode(shiftedCharCode);
}

// Returns true if 'code' represents a lowerCase letter, false otherwise
function checkForLowerCase(char) {
  const code = char.charCodeAt(0);
  return firstLetterLowerCharCode <= code && code <= lastLetterLowerCharCode;
}

// Convert a charCode to latinCode (i.e 0-25, where 0 = 'a' and 25 = 'z')
function convertToLatinCode(char) {
  const charCode = char.toLowerCase().charCodeAt(0);
  return charCode - firstLetterLowerCharCode;
}

// Encrypt latinCode
function shiftLatinCode(latinCode, shiftFactor) {
  // 26 letters in the latin alphabet
  let shiftedCode = (latinCode + shiftFactor) % 26;

  // Check for and handle overflow or underflow from shifting the code by
  // wrapping around
  if (shiftedCode < 0) {
    shiftedCode = handleNegativeLatinCode(shiftedCode);
  } else if (shiftedCode > 25) {
    shiftedCode = handlePositiveLatinCode(shiftedCode);
  }

  return shiftedCode;
}

// Handles cases when the shifted latinCode is less than 0 (i.e 'a')
function handleNegativeLatinCode(code) {
  while (code < 0) {
    code += 26;
  }

  return code;
}

// Handles cases when the shifted latinCode is greater than 25 (i.e 'z')
function handlePositiveLatinCode(code) {
  while (code > 25) {
    code %= 26;
  }

  return code;
}

// Convert a latinCode to charCode preserving case-sensitivity
function convertToCharCode(latinCode, isLowerCase) {
  let charCode;
  if (isLowerCase) {
    charCode = latinCode + firstLetterLowerCharCode;
  } else {
    charCode = latinCode + firstLetterUpperCharCode;
  }

  return charCode;
}

module.exports = caesar

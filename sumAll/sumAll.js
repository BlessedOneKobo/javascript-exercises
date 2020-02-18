const sumAll = function(start, end) {
  // Handle non-number parameters
  if (typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR';
  }

  // Handle negative numbers
  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  // Handle scenario when a larger number is the first parameter
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }
  
  let sum = 0;
  for (let num = start; num <= end; num++) {
    sum += num;
  }

  return sum;
}

module.exports = sumAll

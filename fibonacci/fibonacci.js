const fibonacci = function(lim) {
  lim = Number(lim);

  // Handle negative numbers and strings
  if (lim < 0 || Number.isNaN(lim)) {
    return 'OOPS';
  }

  let a = 0;
  let b = 1;
  for (let i = 0; i < lim; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return a;
}

module.exports = fibonacci

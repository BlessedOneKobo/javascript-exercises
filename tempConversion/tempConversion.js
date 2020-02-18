const ftoc = function(fahrenheit) {
  return round((fahrenheit - 32) * 5 / 9, 1);
}

const ctof = function(celsius) {
  return round(celsius * 9 / 5 + 32, 1);
}

const round = function(num, dp = 1) {
  if (dp < 0) {
    dp = 0;
  }
  
  const mult = 10 ** dp;
  return Math.round(num * mult) / mult;
}

module.exports = {
  ftoc,
  ctof
}

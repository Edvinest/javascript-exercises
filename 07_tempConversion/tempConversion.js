const convertToCelsius = function(temp) {
  return Number(Math.fround((temp - 32)*(5/9), 1).toFixed(1))
};

const convertToFahrenheit = function(temp) {
  return Number(Math.fround(temp * (9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

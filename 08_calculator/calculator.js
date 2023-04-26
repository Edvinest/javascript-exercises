const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let arraySum = 0
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }

  return arraySum
};

const multiply = function (array) {
  let arraySum = 1;
  for (let i = 0; i < array.length; i++) {
    arraySum *= array[i];
  }

  return arraySum;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

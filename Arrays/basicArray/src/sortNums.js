'use strict';

// the correct way to sort values when using .sort method 
// without the compare func it sorts the values lexicographically 
// so with the compare func it sorts if numerically

module.exports = function sortNums(array) {
  function compare(num1, num2) {
    return num1 - num2;
  }
  return array.sort(compare);
};

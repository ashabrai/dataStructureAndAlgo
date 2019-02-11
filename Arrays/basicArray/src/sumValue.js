'use strict';

// --------create a function that would add all indexs and return total sum 

module.exports = function sumValue(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  } return sum;
};

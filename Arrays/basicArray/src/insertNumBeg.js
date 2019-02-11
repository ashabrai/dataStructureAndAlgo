'use strict';

// --------- adding value to the beginning of array 

module.exports = function insertNumBeg(array, x) {
  for (let i = array.length; i >= 0; --i) {
    array[i] = array[i - 1];
  } array[0] = x;
  return array;
};

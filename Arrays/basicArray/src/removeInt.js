'use strict';

// ----------------------------------------//
// remove an element in the beginning of the array, however this way will lea
// leave extra space 
// return [2, 3,4,5,6, undefined]

module.exports = function removeInt(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  } return array;
};

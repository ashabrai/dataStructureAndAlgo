'use strict';

/* eslint-disable no-undef */

// Problem Domain: Given a list of values(tempertures) and a interger(k)- 
// find the closest value in the list of numbers to the given intger. 

// Values will range from positive to negitive, sort the data however you want

module.exports = function findClosestTemp(array, k) {
  let closeVal = array[0];
  let difference = Math.abs(closeVal - k);

  for (let i = 0; i < array.length; i++) {
    const newDiff = Math.abs(k - array[i]);
    if (newDiff < difference) {
      // eslint-disable-next-line no-const-assign
      difference = newDiff;
      closeVal = array[i];
    } 
  } return closeVal;
};

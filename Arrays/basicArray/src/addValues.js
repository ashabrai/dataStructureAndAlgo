'use strict';

// create a function to add values into an empty array

module.exports = function addValuesArray(n) {
  const emptyArray = [];
  for (let i = 0; i < n; i++) {
    emptyArray.push(i);
  }
  return emptyArray;
};

// adding values to the middle index using splice
// key things with splice:
// starting index/where you want to begin adding nums 
// number of elements to remove (or just 0 - if your adding values)
// and finally what elements you're adding to the array 

// let array = [1,2,3,7,8,9]

// array.splice(3, 0 ,4,5,6) : return array === 1,2,3,4,5,6,7,8,9
// to remove items 

// array.splice(3,3) : return array === 1,2,3

// ---------------------------------------------//

// exercises to try 

// Write a function that takes an arithmetic expression as an argument and returns
// the position in the expression where a parenthesis is missing 

// Giving a pez dispenser, that has red, yellow and orange. Using the stack method
// create a function that removes all the yellow pez without changing the order 
// of the other candies in the despensor

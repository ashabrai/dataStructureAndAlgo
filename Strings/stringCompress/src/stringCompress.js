/* eslint-disable prefer-const */

'use strict';

// Givin a string of letters return the count of the letters and letter
// Input: "a,a,a,a,b,b,c" output: "4a,2b,1c"

module.exports = function compressString(string) {
  let compStr = '';
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line prefer-destructuring
  const length = string.length;

  for (let i = 0; i < length; i++) {
    let count = 1;

    while (string[i] === string[i + 1]) {
      // eslint-disable-next-line no-plusplus
      count++;  
    } 
    compStr += count + string[i];
  } return compStr;
}; 

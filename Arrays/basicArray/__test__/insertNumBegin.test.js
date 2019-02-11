'use strict';

const insertNumBeg = require('../src/insertNumBeg');

const testArr = [2, 3, 4, 5];

describe('#insertNumBeg', () => {
  test('to see if number is added in beg', () => {
    const nArray = insertNumBeg(testArr, 1);
    expect(nArray).toEqual([1, 2, 3, 4, 5]);  
  });
});

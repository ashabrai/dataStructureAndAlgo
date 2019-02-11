'use strict';

const sortNums = require('../src/sortNums');

const array = [4, 200, 5, 1, 300, 3, 400]; 
// 1 3 4 5 200 300 400

describe('#sortNums', () => {
  test('to see if it sorts array', () => {
    const sortArr = sortNums(array);
    expect(sortArr).toEqual([1, 3, 4, 5, 200, 300, 400]);
  });
});

'use strict';

const reverseArray = require('../src/solution');

const arr = [1, 2, 3, 4, 5];

describe('solution.js', () => {
  test('testing to see if function reverse arr', () => {
    const testArr = reverseArray(arr);
    expect(testArr).toEqual([5, 4, 3, 2, 1]);
  });
});

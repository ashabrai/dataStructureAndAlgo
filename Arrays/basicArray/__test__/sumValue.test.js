'use strict';

const sumValue = require('../src/sumValue');

const array = [1, 2, 3, 4];

describe('#sumValue', () => {
  test('to see if values in arr add together', () => {
    const sumOfArray = sumValue(array);
    expect(sumOfArray).toEqual(10);
  });
});

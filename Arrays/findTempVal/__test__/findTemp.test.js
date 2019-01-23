'use strict';

const findTempVal = require('../src/findTemp');

const temps = [10, -5, 60, 80, 35];

describe('#findTempVal', () => {
  test('Test to see if you can find closest value', () => {
    const temp = findTempVal(temps, 1);
    expect(temp).toEqual(-5);
  });
});

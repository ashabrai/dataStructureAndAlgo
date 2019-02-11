'use strict';

const addValuesArray = require('../src/addValues');

describe('#basicArray', () => {
  test('to see if values are added in array', () => {
    const addVal = addValuesArray(6);
    expect(addVal).toEqual([0, 1, 2, 3, 4, 5]);
  });
});

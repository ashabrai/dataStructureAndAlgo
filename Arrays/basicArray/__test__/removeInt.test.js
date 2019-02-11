'use strict';

const removeInt = require('../src/removeInt');

const array = [1, 2, 3, 4];

describe('#removeInt', () => {
  test('to see if remove from beginning', () => {
    const removeBeginInt = removeInt(array);
    expect(removeBeginInt).toEqual([2, 3, 4, undefined]);
  });
});

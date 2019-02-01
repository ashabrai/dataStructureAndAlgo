'use strict';

const compressString = require('../src/stringCompress');

const string = 'a,a,a,b,b,d,e,e';

describe('#stringCompress.js', () => {
  test('testing string to compress', () => {
    const testString = compressString(string);
    expect(testString).toEqual('3a,2b,1d,2e');
  });
});

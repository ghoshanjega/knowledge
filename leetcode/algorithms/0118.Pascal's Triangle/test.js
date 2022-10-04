'use strict';

const assert = require('assert');

const { generate } = require('./');

describe('#pascals triangle', () => {
  const tests = [
    {
      numRows: 5,
      result: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]],
    },
  ];

  for (const { numRows, result } of tests) {
    it(`${numRows} -> ${result}`, () => {
      assert.deepStrictEqual(generate(numRows), result);
    });
  }
});

'use strict';

const assert = require('assert');

const { isPalindrome } = require('./');

describe('#isPalindrome', () => {
  const tests = [
    {
      x: 121,
      result: true,
    },
    {
      x: -121,
      result: false,
    },
    {
      x: 10,
      result: false,
    },
  ];

  for (const { x, result } of tests) {
    it(`${x} -> ${result}`, () => {
      assert.deepStrictEqual(isPalindrome(x), result);
    });
  }
});

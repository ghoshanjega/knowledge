'use strict';

const assert = require('assert');

const { longestPalindrome } = require('./');

describe('#longestPalindrome', () => {
  const tests = [
    {
      s: 'abccccdd',
      result: 7,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(longestPalindrome(s), result);
    });
  }
});

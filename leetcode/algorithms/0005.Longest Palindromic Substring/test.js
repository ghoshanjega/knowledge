'use strict';

const assert = require('assert');

const { longestPalindrome } = require('./');

describe('#longestPalindrome', () => {
  const tests = [
    // {
    //   s: 'babad',
    //   result: 'bab',
    // },
    // {
    //   s: 'cbbd',
    //   result: 'bb',
    // },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(longestPalindrome(s), result);
    });
  }
});

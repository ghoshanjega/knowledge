'use strict';

const assert = require('assert');
const { result } = require('lodash');

const { validPalindrome } = require('./');

describe('#validPalindrome', () => {
  const tests = [
    {
      s: 'aba',
      result: true,
    },
    {
      s: 'abca',
      result: true,
    },
    {
      s: 'abc',
      result: false,
    },
    {
      s: 'abcya',
      result: false,
    },
    {
      s: 'y',
      result: true,
    }
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(validPalindrome(s), result);
    });
  }
});

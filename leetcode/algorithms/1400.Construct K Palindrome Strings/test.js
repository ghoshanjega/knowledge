'use strict';

const assert = require('assert');

const { canConstruct } = require('./');

describe('#canConstruct K Palindrome', () => {
  const tests = [
    {
      s: 'annabelle',
      k: 2,
      result: true,
    },
    {
      s: 'leetcode',
      k: 3,
      result: false,
    },
    {
      s: 'true',
      k: 4,
      result: true,
    },
  ];

  for (const { s, k, result } of tests) {
    it(`${s}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(canConstruct(s, k), result);
    });
  }
});

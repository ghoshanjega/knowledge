'use strict';

const assert = require('assert');

const { firstUniqChar } = require('./');

describe('#firstUniqChar', () => {
  const tests = [
    {
      s: 'leetcode',
      result: 0,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(firstUniqChar(s), result);
    });
  }
});

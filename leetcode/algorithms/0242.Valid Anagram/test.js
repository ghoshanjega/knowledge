'use strict';

const assert = require('assert');

const { isAnagram } = require('./');

describe('#isAnagram', () => {
  const tests = [
    {
      s: 'anagram',
      t: 'nagaram',
      result: true,
    },
    {
      s: 'rat',
      t: 'car',
      result: false,
    },
  ];

  for (const { s, t, result } of tests) {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.deepStrictEqual(isAnagram(s, t), result);
    });
  }
});

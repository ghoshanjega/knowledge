'use strict';

const assert = require('assert');

const { canConstruct } = require('./');

describe('#canConstruct', () => {
  const tests = [
    {
      ransomNote: 'aabbaa',
      magazine: 'ab',
      result: false,
    },
    {
      ransomNote: 'ab',
      magazine: 'abc',
      result: true,
    },
  ];

  for (const { ransomNote, magazine, result } of tests) {
    it(`${ransomNote}, ${magazine} -> ${result}`, () => {
      assert.deepStrictEqual(canConstruct(ransomNote, magazine), result);
    });
  }
});

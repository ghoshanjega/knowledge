'use strict';

const assert = require('assert');

const { containsDuplicate } = require('./');

describe('#containsDuplicate', () => {
  const tests = [
    {
      nums: [1,2,3,1],
      result: true,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(containsDuplicate(nums), result);
    });
  }
});

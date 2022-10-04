'use strict';

const assert = require('assert');

const { maxSubArray } = require('./');

describe('#maxSubArray', () => {
  const tests = [
    {
      nums: [-2,1,-3,4,-1,2,1,-5,4],
      result: 6,
    },
    {
      nums: [5,4,-1,7,8],
      result: 23
    }
    ,
    {
      nums: [8,-19,5,-4,20],
      result: 21
    }
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(maxSubArray(nums), result);
    });
  }
});

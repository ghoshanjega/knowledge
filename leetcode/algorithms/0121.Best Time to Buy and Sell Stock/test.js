'use strict';

const assert = require('assert');

const { maxProfit } = require('./');

describe('#maxProfit', () => {
  const tests = [
    {
      prices: [7,1,5,3,6,4],
      result: 5,
    },
  ];

  for (const { prices, result } of tests) {
    it(`${prices} -> ${result}`, () => {
      assert.deepStrictEqual(maxProfit(prices), result);
    });
  }
});

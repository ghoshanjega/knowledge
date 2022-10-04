'use strict';

const assert = require('assert');

const { minPathCost } = require('./');

describe('#minPathCost', () => {
  const tests = [
    {
      grid: [[5,1,2],[4,0,3]],
      moveCost: [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]],
      result: 6,
    },
  ];

  for (const { grid, moveCost, result } of tests) {
    it(`${grid}, ${moveCost} -> ${result}`, () => {
      assert.deepStrictEqual(minPathCost(grid, moveCost), result);
    });
  }
});

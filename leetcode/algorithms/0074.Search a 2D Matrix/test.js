'use strict';

const assert = require('assert');

const { searchMatrix } = require('./');

describe('#searchMatrix', () => {
  const tests = [
    {
      matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
      target: 3,
      result: true,
    },
    {
      matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
      target: 0,
      result: false,
    },
    {
      matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
      target: 7,
      result: true,
    },
    {
      matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
      target: 100,
      result: false,
    },
    {
      matrix: [[1,3]],
      target: 1,
      result: true,
    },
  ];

  for (const { matrix, target, result } of tests) {
    it(`${matrix}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(searchMatrix(matrix, target), result);
    });
  }
});

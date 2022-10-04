'use strict';

const assert = require('assert');

const { matrixReshape } = require('./');

describe('#matrixReshape', () => {
  const tests = [
    {
      mat: [[1,2],[3,4]],
      r: 1,
      c:4,
      result: [[1,2,3,4]],
    },
    {
      mat: [[1,2],[3,4]],
      r: 2,
      c: 2,
      result: [[1,2],[3,4]],
    },
    {
      mat: [[1,2],[3,4]],
      r: 2,
      c: 4,
      result: [[1,2],[3,4]],
    },
  ];

  for (const { mat, r, c, result } of tests) {
    it(`${mat}, ${r}, ${c} -> ${result}`, () => {
      assert.deepStrictEqual(matrixReshape(mat, r, c), result);
    });
  }
});

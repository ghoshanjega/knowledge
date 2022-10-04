'use strict';

module.exports = { matrixReshape };

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(mat, r, c) {
    const [m, n] = [mat.length, mat[0].length]

    const output = []

    let i = 0
    let j = 0
    if (m * n === r * c) { 
        for (let a = 0; a < r; a++) {
            const row = []
            for (let b = 0; b < c; b++) {
                row.push(mat[i][j++])
                if (j == n) {
                    j = 0
                    i++
                }

            }
            output.push(row)
            if (i === m) break
        }
    }
    else {
        return mat
    }
    return output
}

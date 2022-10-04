'use strict';

module.exports = { searchMatrix };

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {

    const [m, n] = [matrix.length, matrix[0].length]
    let [i, k] = [0, (m * n) - 1]
    let j = k
    let c = true
    while (c) {
        const num = matrix[Math.floor(j / n)][j % n]
        if (num == target) return true
        if (i >= k) c = false
        if (target > num) i = j + 1
        else if (target < num) k = j
        j = Math.floor((i + k) / 2)
    }
    return false
}

function bs(condition: () => void)

function searchMatrix(matrix, target) {


}

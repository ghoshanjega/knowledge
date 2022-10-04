'use strict';

module.exports = { isValidSudoku };

function isValid(mat) {
    const m = new Set()
    for (let i = 0; i < mat.length; i++) {
        if (mat[i] == ".") continue
        if (m.has(mat[i])) return false
        m.add(mat[i])
    }
    return true
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    // check horizontal 
    for (let i = 0; i < 9; i++) {
        const mat = board[i]
        const res = isValid(mat)
        if (!res) return false
    }
    // check vertical
    for (let i = 0; i < 9; i++) {
        const mat = board.map(b => b[i])
        const res = isValid(mat)
        if (!res) return false
    }
    // check the small boxes
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const mat = []
            for (let k = j * 3; k < 3 + j * 3; k++) {
                const i2 = i * 3
                mat.push(board[i2][k], board[i2 + 1][k], board[i2 + 2][k])
            }
            const res = isValid(mat)
            if (!res) return false

        }
    }
    return true

}

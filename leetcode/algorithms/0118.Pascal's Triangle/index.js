'use strict';

module.exports = { generate };

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    if (numRows > 2){
        const output = [[1],[1,1]]
        for (let i = 2; i < numRows; i++) {
            let row = [1]
            const prev = output[i-1]
            for (let j = 1; j < prev.length; j++) {
                const element = prev[j] + prev[j-1];
                row.push(element)
            }      
            row.push(1)
            output.push(row)
        }
        return output
    }
    else if (numRows == 1) return [[1]]
    else if (numRows == 2) return [[1], [1,1]]
}

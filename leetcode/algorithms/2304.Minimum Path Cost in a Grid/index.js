'use strict';

module.exports = { minPathCost };

/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
function minPathCost(grid, moveCost) {
    // use kadane's algo as going from one row to another is basically groing from one local min to another
    const row = grid.length
    const column = grid[0].length
    
    const MAX = Number.MAX_SAFE_INTEGER
    let best = new Array(column).fill(0)
    
    for (let r = 1; r < row; r++ ) {
        
        const newBest = new Array(column).fill(MAX)
        for (let i = 0; i < column; i++ ) {
            for (let j = 0; j < column; j++) { // prev row
                const currCost = grid[r-1][j] + moveCost[grid[r-1][j]][i] + best[j] // val of item in prev row + move cost + path cost
                      
                newBest[i] = Math.min(newBest[i], currCost)
            }   
        }
        console.log(newBest)
        best = newBest
    }
    best = best.map((b,i) => b + grid[row-1][i])
    return Math.min(...best) 
}

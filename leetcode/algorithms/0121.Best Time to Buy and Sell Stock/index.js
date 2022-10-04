'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let globalMax = 0
    let localMax = 0 
    for (let i = 1; i < prices.length; i++) {
        localMax = Math.max(localMax+(prices[i]-prices[i-1]),0)
        globalMax = Math.max(localMax,globalMax)
    }
    return globalMax
}

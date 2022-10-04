'use strict';

module.exports = { maxSubArray };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let max = nums[0]
    let rollingMax = nums[0]
    for (let index = 1; index < nums.length; index++) {
        const num = nums[index]
        rollingMax = Math.max(rollingMax + num, num)
        max = Math.max(max, rollingMax)
    }
    return max
}

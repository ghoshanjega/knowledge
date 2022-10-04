'use strict';

module.exports = { singleNumber };

/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
    let xOrD = nums[0]
    for (let index = 1; index < nums.length; index++) {
        xOrD = xOrD ^ nums[index]
    }
    return xOrD
}

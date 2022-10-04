'use strict';

module.exports = { twoSum };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let d = new Map()
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const want = target - num
        if (d.has(want)) return [d.get(want), index]
        d.set(num, index)
    }
}

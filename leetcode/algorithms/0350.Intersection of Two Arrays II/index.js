'use strict';

module.exports = { intersect };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    const [small, large] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1]
    let m = new Map()
    let output = []
    small.forEach(n => {
        if (m.has(n)) {m.set(n, m.get(n)+1)}
        else m.set(n,1)
    });
    large.forEach(n => {
        if (m.has(n) && m.get(n) > 0) {
            m.set(n, m.get(n)-1)
            output.push(n)
        }
    })
    return output
}

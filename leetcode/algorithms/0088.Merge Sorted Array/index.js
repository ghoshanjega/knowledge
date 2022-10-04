'use strict';

module.exports = { merge };

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
function merge(nums1, m, nums2, n) {
    let l = m+n
    let x = m-1
    let y = n-1
    while (x >= 0 || y >= 0) {
        const n1 = x >= 0 ? nums1[x] : -Infinity
        const n2 = y >= 0 ? nums2[y] : -Infinity
        if (n2 > n1) {
            nums1[--l] = n2
            y--
        }
        else if (n2 <= n1) {
            nums1[--l] = n1
            x--
        }
    }
}

'use strict';

module.exports = { longestPalindrome };

function isPalindrome(s, dic) {
    if (dic.has(s)) return true
    else return s.join() === s.reverse().join()
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    // let max = ''
    // let rollingMax = ''
    // s = s.split('')
    // const dic = new Set()
    // for (const c in s) {
    //     rollingMax = (rollingMax + c).length >  c
    //     max = Math.max(max, rollingMax)
    // }
    // return max
}

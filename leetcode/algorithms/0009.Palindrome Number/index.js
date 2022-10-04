'use strict';

module.exports = { isPalindrome };

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x > -1) {
        return x.toString().split('').reverse().join('') === x.toString()
    }
    return false
}

'use strict';

module.exports = { validPalindrome };

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s, l = 0, r = s.length - 1, del = false) {
    while (l < r) {
      if (s[l] === s[r]) {
        l++;
        r--;
        continue;
      }
      if (del) {
        return false;
      }
      return validPalindrome(s, l + 1, r, true) || validPalindrome(s, l, r - 1, true);
    }
    return true;
  }


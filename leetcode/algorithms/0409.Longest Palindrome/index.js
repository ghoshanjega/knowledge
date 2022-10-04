'use strict';

module.exports = { longestPalindrome };

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
    const sp = s.split('')
    let m = {}
    let count = 0
    for (let i = 0; i < sp.length; i++) {
        const c = sp[i];
        if (m[c]) m[c] = m[c] + 1
        else m[c] = 1

        if (m[c]%2 === 0) count = count + 2
    }
    console.log(m);
    if (sp.length>count) return count + 1;
    return count

}

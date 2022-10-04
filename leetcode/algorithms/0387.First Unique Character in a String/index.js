'use strict';

module.exports = { firstUniqChar };

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    s = s.split('')
    const m = new Map();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (m.has(c)) m.set(c,-1)
        else m.set(c,i)
    }
    for (const v of m.values()) {
        if (v >= 0) return v
    }
    return -1
}

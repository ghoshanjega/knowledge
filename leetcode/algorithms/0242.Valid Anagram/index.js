'use strict';

module.exports = { isAnagram };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    const m = new Map()
    for (const c of s) {
        if (m.has(c)) m.set(c, m.get(c) + 1)
        else m.set(c, 1)
    }
    for (const c of t) {
        if (m.has(c)){
            let val = m.get(c)
            if (val === 1) m.delete(c)
            else m.set(c, m.get(c) - 1)
        }
        else return false
    }
    if (m.size > 0) return false
    return true
}

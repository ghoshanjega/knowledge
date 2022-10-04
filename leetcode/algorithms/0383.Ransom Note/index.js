'use strict';

module.exports = { canConstruct };

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const m = new Map()
    for (const c of magazine) {
        if (m.has(c)) m.set(c, m.get(c) + 1)
        else m.set(c, 1)
    }
    for (const c of ransomNote) {
        if (m.has(c) == false) return false
        else if (m.get(c) === 0) return false
        else m.set(c, m.get(c) - 1)
    }
    return true
}

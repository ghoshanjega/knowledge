'use strict';

module.exports = { canConstruct };

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function canConstruct(s, k) {
    const sp = s.split('')
    if (sp.length < k) return false
    else {
        let m = {}
        for (let i = 0; i < sp.length; i++) {
            const c = sp[i];
            if (m[c]) m[c] = m[c] + 1
            else m[c] = 1
        }
        let oddCountLetters = Object.values(m).filter(c => c%2)
        if (oddCountLetters.length > k) return false
        return true

    }


}

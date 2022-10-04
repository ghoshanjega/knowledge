'use strict';

module.exports = { countSubstrings };
const dic = {}

function isPalindrome(s) {
    if (dic[s.slice(0, s.length - 1)] || dic[s.slice(1, s.length)]) return false
    if (dic[s] != undefined) return dic[s]
    const res =  s.join() === s.reverse().join()
    dic[s] = res
    return [res, dic]
}

function getAllSubstringsAndVerify(str) {
    console.log(str);
    let count = 0
    var i, j, result = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            const sub = str.slice(i, j)
            if( isPalindrome(sub.split(''))) count = count + 1

            // result.push(str.slice(i, j));
        }
    }
    // return result;
    return count
}

/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
    const count = getAllSubstringsAndVerify(s)
    // console.log(subs);
    // const m = {}
    // let count = 0
    // for (let i = 0; i < subs.length; i++) {
    //     const sub = subs[i]
    //     if (m[sub] == null) {
    //         m[sub] = isPalindrome(sub.split(''), m)
    //     }
    //     if (m[sub] == true) {
    //         count += 1
    //         continue
    //     }
    //     // if (m[sub]) m[sub] = m[sub] + 1
    //     // else m[sub] = 1



        
    // }
    // return Object.values(m).filter(r => r == true).length
    return count
}

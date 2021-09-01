/*
Problem Link: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
Algo: Hash Table
Language: Javascript
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let tMap = new Map();
    
    for(let i = 0; i < t.length; i++) {
        tMap.set(t[i], tMap.get(t[i])=== undefined ? 1 : tMap.get(t[i])+1);
    }
    
    let cnt = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(tMap.get(s[i]) === undefined) cnt++;
        else tMap.set(s[i], tMap.get(s[i]) === 1 ? undefined : tMap.get(s[i])-1)
    }
    
    return cnt;
};

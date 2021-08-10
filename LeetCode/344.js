/*
Problem Link: https://leetcode.com/problems/reverse-string/
Language: Javascript
Algorithm: Two Pointer
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let length = s.length%2 === 0 ? s.length/2 : (s.length-1)/2;
    for(let i = 0, j = s.length-1; i < length, j >= length; i++, j--) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s;
};

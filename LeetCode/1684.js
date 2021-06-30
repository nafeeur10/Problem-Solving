/*
Problem Link: https://leetcode.com/problems/count-the-number-of-consistent-strings/
Language: Javascript
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let allowedMap = new Map();
    for(let i = 0; i < allowed.length; i++) {
        allowedMap.set(allowed[i], allowedMap.get(allowed[i]) == undefined ? true : false);
    }

    let ans = 0;

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        let counter = 0;
        for(let j = 0; j < word.length; j++) {
            if(allowedMap.get(word[j])) {
                counter++;
            }
        }
        if(counter==word.length) ans++;
    }

    return ans;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));

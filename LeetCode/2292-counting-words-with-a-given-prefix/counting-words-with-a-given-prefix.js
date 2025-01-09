/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let cnt = 0
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if(element.indexOf(pref) == 0) {
            cnt++
        }
    }

    return cnt
};
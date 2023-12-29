/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    return map.size;
};
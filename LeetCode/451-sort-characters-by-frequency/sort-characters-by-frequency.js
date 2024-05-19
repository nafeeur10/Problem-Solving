/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    const entries = Array.from(map.entries());
    entries.sort((a, b) => b[1] - a[1]);
    const sortedMap = new Map(entries);
    
    let resultString = "";

    for (const [key, value] of sortedMap.entries()) {
        for(let j = 0; j < value; j++)
            resultString += key;
    }
    return resultString;
};
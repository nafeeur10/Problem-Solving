/**
 * @param {string[]} words
 * @return {number}
 */

const calculate = function(word1, word2) {
    let set1 = new Set();
    let set2 = new Set();

    for(let i = 0; i < word1.length; i++) {
        set1.add(word1[i]);
    }

    for(let i = 0; i < word2.length; i++) {
        set2.add(word2[i]);
    }

    let cnt = 0;
    for (const item of set1) {
        if(set2.has(item)) cnt++
    }

    if(cnt === set1.size && cnt === set2.size) return true;
    else return false;
}

var similarPairs = function(words) {
    let cnt = 0;
    for(let i = 0; i < words.length; i++) {
        for(let j = i + 1; j < words.length; j++) {
            if(calculate(words[i], words[j])) cnt++;
        }
    }
    return cnt;
};
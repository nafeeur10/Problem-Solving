/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        let flag = 0;
        for(let j = 0; j < word.length; j++) {
            if(word[j] == x) {
                flag = 1;
                break;
            }
        }

        if(flag) {
            result.push(i);
        }
    }
    return result;
};
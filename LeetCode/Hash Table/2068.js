/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 function checkAlmostEquivalent(word1, word2) {
    let ans;

    let word1Map = new Map();
    let word2Map = new Map();

    for(let i = 0; i < word1.length; i++) {
        word1Map.set(word1[i], word1Map.get(word1[i]) + 1 || 1);
        word2Map.set(word2[i], word2Map.get(word2[i]) + 1 || 1);
    }

    for(const [key, value] of word1Map) {

        let valueWord2 = word2Map.get(key);
        if(valueWord2 === undefined) valueWord2 = 0;
        
        let diff = Math.abs(valueWord2 - value);
        if(diff > 3) return false;
        
    }
     
    for(const [key, value] of word2Map) {

        let valueWord1 = word1Map.get(key);
        if(valueWord1 === undefined) valueWord1 = 0;
        
        let diff = Math.abs(valueWord1 - value);
        if(diff > 3) return false;
        
    }

    return true;
};

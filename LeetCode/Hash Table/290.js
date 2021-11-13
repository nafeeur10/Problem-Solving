/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let separeateStringArray = new Array();
    let tempString = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ' || i === s.length - 1) {
            if(i === s.length - 1) tempString += s[i];
            separeateStringArray.push(tempString);
            tempString = '';
        }
        else {
            tempString+=s[i];
        }
    }

    if(pattern.length !== separeateStringArray.length) 
    return false;


    let patternMap = new Map();
    let sMap = new Map();

    for(let i = 0; i < pattern.length; i++) {
        if(patternMap.get(pattern[i]) === undefined && sMap.get(separeateStringArray[i]) === undefined) {
            patternMap.set(pattern[i], separeateStringArray[i]);
            sMap.set(separeateStringArray[i], pattern[i]);
        }

        else if(patternMap.get(pattern[i]) === undefined && sMap.get(separeateStringArray[i]) !== undefined) {
            return false;
        }

        else if(patternMap.get(pattern[i]) !== undefined && patternMap.get(pattern[i]) !== separeateStringArray[i]) {
            return false;
        }
    }

    return true;
};

console.log(wordPattern("aaa", "aa aa aa aa"))

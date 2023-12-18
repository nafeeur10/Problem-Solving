/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    for(let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.get(s[i]) + 1 || 1);
    }

    for(let i = 0; i < t.length; i++) {
        mapT.set(t[i], mapT.get(t[i]) + 1 || 1);
    }

    if(mapS.size !== mapT.size) return false

    for (const [key, value] of mapS) {
        if(mapT.get(key) == value ) {

        } else {
            return false;
        }
        //console.log(`${key} = ${value}`);
      }

    return true;
};
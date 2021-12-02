/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    let one = 0;
    let zero = 0;
    let maxZero = 0;
    let maxOne = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '0') {
            one = 0;
            zero++;
        }
        else {
            zero = 0;
            one++;
        }

        maxOne = Math.max(maxOne, one);
        maxZero = Math.max(maxZero, zero);
    }
     
    if(maxOne > maxZero) return true;
    else return false;
};

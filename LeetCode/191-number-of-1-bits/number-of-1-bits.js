/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n) {
        let t = n % 2;
        if(t == 1) count++;
        n = Math.floor(n / 2)
    }
    return count;
};
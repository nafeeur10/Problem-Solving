/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let cnt = 0
    let num = 1
    while(n >= 0) {
        n-=num
        num++
        cnt++
    }
    
    if(n === 0)
    return cnt
    else
    return cnt - 1
};

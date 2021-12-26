/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 0
    let num = 1
    
    while(k) {
        if(arr[i] !== num) {
            num++
            k--
        }
        else {
            i++
            num++
        }
    }
    
    return num-1
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let cnt = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            cnt++;
        }

        if(cnt === 3) return true;
        if(arr[i] % 2 === 0) cnt = 0;
    }

    return false;
};

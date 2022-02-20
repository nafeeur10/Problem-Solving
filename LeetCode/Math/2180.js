/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    let cnt = 0;

    for(let i = 2; i <= num; i++) {

        let N = i
        let sum = 0

        while(N) {
            let t = N%10
            N = Math.floor(N /10)
            sum+=t
        }

        if(sum%2 == 0) {
            cnt++
        }
    }

    return cnt;
};

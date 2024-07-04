/**
 * @param {number[]} nums
 * @return {number}
 */

var checkPrime = function(number) {

    if(number === 1) return false;

    const root = Math.sqrt(number);

    for(let i = 2; i <= root; i++) {
        if(number%i === 0) return false;
    }

    return true;
}

var maximumPrimeDifference = function(nums) {
    
    let I = 0;
    for(let i = 0; i < nums.length; i++) {
        if(checkPrime(nums[i])) {
            I = i;
            break;
        }
    }

    let J = 0;
    for(let j = nums.length - 1; j >= I; j--) {
        if(checkPrime(nums[j])) {
            J = j;
            break;
        }
    }
    return J-I;
};
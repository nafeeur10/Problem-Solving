/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length < 5) return 0;

    const len = nums.length;
    let res = Number.MAX_SAFE_INTEGER;

    nums = nums.sort((a, b) => a - b);
    
    for(let i = 0; i < 4; i++) {
        res = Math.min(res, nums[len-4+i]-nums[i])
    }

    return res;
};
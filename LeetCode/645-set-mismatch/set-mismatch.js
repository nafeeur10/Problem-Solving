/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate = 0;
    let missing = 0;

    let map = new Map();
    let n = nums.length
    let sum = n*(n+1)/2;
    let dubSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
        if(map.get(nums[i]) > 1) {
            duplicate = nums[i];
        }
        dubSum += nums[i];
    }

    dubSum = dubSum - duplicate
    missing = sum - dubSum;
    return [duplicate, missing]
};
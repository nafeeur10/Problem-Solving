/*
Problem Link: https://leetcode.com/problems/maximum-product-of-three-numbers/
Solution Language: Javascript
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    
    
    let length = nums.length;
    
    let sum = 0;
    
    if(nums[0] < 0 && nums[1] < 0) {
        sum = nums[0] * nums[1] * nums[length-1];
    }
    
    
    if(sum > nums[length-1] * nums[length-2] * nums[length-3]) return sum;
    return nums[length-1] * nums[length-2] * nums[length-3];
};

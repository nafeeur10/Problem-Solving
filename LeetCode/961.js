/*
Problem Link: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
Language: Javascript
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    let n = nums.length/2;
    let map = new Map();

    for(let i = 0; i < n*2; i++) {
        map.set(nums[i], map.get(nums[i]) === undefined ? 1 : map.get(nums[i])+1);
        if(map.get(nums[i]) === n) return nums[i];
    }
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));

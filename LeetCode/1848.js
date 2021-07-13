/*
Problem Link: https://leetcode.com/problems/minimum-distance-to-the-target-element/
Language: Javascript
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {
    let min = nums.length-1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            min = Math.min(Math.abs(i-start), min);
        }
    }
    return min;
};

/*
Problem: https://leetcode.com/problems/binary-search/
Algo: Binary Search
Language: JS
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start = 0;
    let end = nums.length;

    while(start <= end) {
        let mid = Math.floor((start + end)/2); 
        if(nums[mid] === target) {
            return mid;
        }
        else if(nums[mid] > target) {
            end = mid - 1;
        }
        else
        {
            start = mid + 1;
        }
    }

    return -1;
};

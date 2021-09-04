/**
 * https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = new Array();
    for(let i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[n+i]);
    }
    return ans;
};

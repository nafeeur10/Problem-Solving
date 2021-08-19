/*
Problem Link: https://leetcode.com/problems/non-decreasing-array/
Language: Javascript
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var checkPossibility = function(nums) {
    let cnt = 0;

    for(let i = 1; i < nums.length ; i++) {
        if(nums[i] < nums[i-1]) 
        {
            if(i == 1 || nums[i-2] <= nums[i]) 
            {
                nums[i-1] = nums[i];
                cnt++;
            }
            else 
            {
                nums[i] = nums[i-1];
                cnt++;
            }
        }
    }

    if(cnt > 1) {
        return false;
    }
    else 
    return true;
};

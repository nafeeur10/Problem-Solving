/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0]-1*nums[0]-1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let mul = (nums[i]-1)*(nums[j]-1);
            result = Math.max(mul, result);
        }
    }

    return result;
};

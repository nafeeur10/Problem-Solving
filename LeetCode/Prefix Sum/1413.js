/**
 * @param {number[]} nums
 * @return {number}
 * You have to store the lowest minimum value for each iteration. Then lowestMinimum*(-1)+1;
 */
 var minStartValue = function(nums) {
    let length = nums.length;
    let prefixSum = 0;
    let maxMin = 0;

    for(let i = 0; i < length; i++) {
        prefixSum+=nums[i];
        maxMin = Math.min(prefixSum, maxMin);
    }

    return (maxMin * (-1)) + 1;
};

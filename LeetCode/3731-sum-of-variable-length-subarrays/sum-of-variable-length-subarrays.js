/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let prefixSum = [];
    
    for (let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i]);

        let sum = 0;
        for(let j = start; j <= i; j++) {
            sum += nums[j];
        }

        prefixSum.push(sum);
    }
    
    let count = 0;
    console.log(prefixSum);

    for(let i = 0; i < prefixSum.length; i++) {
        count += prefixSum[i];
    }

    return count;
};
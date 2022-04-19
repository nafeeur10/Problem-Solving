/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let zeroCount = 0
    let j = 0
    let max = -1

    for(let i = 0; i < nums.length; i++)
    {
       if(nums[i] == 0) {
           zeroCount++
       }

       while(zeroCount > k) {
           if(nums[j] == 0) zeroCount--
           j++
       }

       max = Math.max((i-j+1), max)
    }

    return max
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));

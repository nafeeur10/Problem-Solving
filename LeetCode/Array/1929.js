/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    let ans = [...nums];
    for(let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    return ans;
};

console.log(getConcatenation([1,2,1]));

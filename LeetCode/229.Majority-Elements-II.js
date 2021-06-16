/*
Solution Link: https://leetcode.com/problems/majority-element-ii/
Language: Javascript
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let sortedNums = nums.sort((a, b) => a-b);
    let nThird = Math.floor(nums.length/3);
    let cnt = 0;
    let ansArray = [];
    if(sortedNums.length == 1) return nums;
    
    for(let i = 0; i <sortedNums.length; i++) {
      if(sortedNums[i] == sortedNums[i+1]) cnt++;
      else {
          if(cnt>=nThird) {
              ansArray.push(sortedNums[i]);
              cnt = 0;
          }
          else{
            cnt = 0;
          }
      }
    }
    
    return ansArray;
};

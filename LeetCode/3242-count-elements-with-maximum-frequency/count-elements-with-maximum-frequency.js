/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let map = new Map();
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
    if(map.get(nums[i]) > max) {
        max = map.get(nums[i]);
    }
  }

  let cnt = 0;

  for (const [key, value] of map.entries()) {
    if(value === max) {
        cnt++;
    }
  }

  return cnt * max;
};
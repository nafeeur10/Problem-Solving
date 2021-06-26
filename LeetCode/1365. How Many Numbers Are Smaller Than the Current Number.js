/*
Problem Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
Solution Language: Javascript
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    const mainNums = [...nums];

    mainNums.sort(function(a, b){
        return a-b;
    });

    let map = new Map();
    let sum = 0;
    for(let i = 0; i < mainNums.length; i++) {
        if(map.get(mainNums[i]) == undefined) {
            map.set(mainNums[i], sum);
        }
        sum++;
    }

    let ans = new Array();

    for(let i = 0; i < nums.length; i++) {
        ans.push(map.get(nums[i]));
    }
    return ans;
};

console.log(smallerNumbersThanCurrent([8, 4, 3, 2, 1, 1, 1]));

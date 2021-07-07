/*
Problem Link: https://leetcode.com/problems/intersection-of-two-arrays/
Language: Javascript
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let ans = new Array();
    let map = new Map();

    for(let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], map.get(nums1[i]) == undefined ? 1 : map.get(nums1[i])+1);
    }

    for(let i = 0; i < nums2.length; i++) {
        if(map.get(nums2[i]) != undefined && map.get(nums2[i]) !== true) {
            ans.push(nums2[i]);
            map.set(nums2[i], true);
        }
    }
    return ans;
};

console.log(intersection([4,9,5], [9,4,9,8,4]));

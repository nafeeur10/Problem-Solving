/*
Problem Link: https://leetcode.com/problems/find-lucky-integer-in-an-array/
Language: Javascript
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    let map = new Map();
    let max = -1;

    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) === undefined ? 1 : map.get(arr[i])+1);
    }

    for(let [key, value] of map) {
        if(value === key) {
            max = Math.max(max, value);
        }
    }
    return max;
};

console.log(findLucky([7,7,7,7,7,7,7]));

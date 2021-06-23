/*
Problem Link: https://leetcode.com/problems/jewels-and-stones/
Solution Language: Javascript
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    for(let i = 0; i <stones.length; i++) {
        map.set(stones[i], map.get(stones[i]) == undefined ? 1 : map.get(stones[i])+1 );
    }
    let count = 0;
    for(let i = 0; i < jewels.length; i++) {
        if(map.get(jewels[i])) count += map.get(jewels[i]);
    }
    return count;
};

console.log(numJewelsInStones("z", "ZZ"));

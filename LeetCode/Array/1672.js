/*
https://leetcode.com/problems/richest-customer-wealth/
Algo: Array
Language: JS
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = -1;
    for(let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
           sum += accounts[i][j];
        }
        max = Math.max(max, sum);
    }
    
    return max;
};

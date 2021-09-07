/*
Problem Link: https://leetcode.com/problems/corporate-flight-bookings/
Algo: Prefix Sum
Language: JS
*/

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let prefixSum = new Array();
    
    for(let i = 1; i <= bookings.length; i++) {
        
        let leftRange = bookings[i-1][0];
        let rightRange = bookings[i-1][1];
        let seat = bookings[i-1][2];
        
        for(let j = 1; j <= n; j++) {
            if(prefixSum[j] === undefined) {
                prefixSum[j] = 0;
            }
            if(j >= leftRange && j<= rightRange)
            prefixSum[j] += seat;
        }
    }
    prefixSum.shift();
    return prefixSum;
};

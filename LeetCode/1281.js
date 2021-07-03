/*
Problem Link: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
Solution Language: Javascript
*/

/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    while(n) {
        let t = n%10;
        n = Math.floor(n/10);
        product = product * t;
        sum = sum + t;
    }

    return product-sum;
};

console.log(subtractProductAndSum(114));

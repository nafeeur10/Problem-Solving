/*
Problem Link: https://leetcode.com/problems/palindrome-number/
Algo: Math
Language: JS
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let ans = false;
    let isNegative = false
    let X = x;
    let cnt = 0;
     
    if(x < 0) return false;
    
    while(x) {
        let t = x%10
        x=Math.floor(x/10)
        cnt++;
    }
    
    
    let Y = X;
    let reverseNumber = 0;
    
    for(let i = 1; i <= cnt; i++) {
        let res = (X%10);
        let u = res * Math.pow(10, cnt - i)
        reverseNumber += u;   
        X = Math.floor(X / 10)
    }
    
    
    let ansCnt = 0
    
    while(Y) {
        let ty = Y % 10
        let trev = reverseNumber % 10
        
        if(ty===trev) ansCnt++
        
        Y = Math.floor(Y / 10)
        reverseNumber = Math.floor(reverseNumber / 10)
    }
    
    if(ansCnt === cnt)
        return true;
    else 
        return false;
};

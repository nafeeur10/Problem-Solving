/*
  Problem Link: https://leetcode.com/problems/valid-parentheses/
  Algorithm: Stack
  Language: Javascript
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = new Array();
    let cnt = 0;
    
    // first in last out
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        
        if(s[i] === ')') {
            let temp = stack[stack.length-1];
            stack.pop();
            if(temp === '(') cnt++;
        }
        
        if(s[i] === '}') {
            let temp = stack[stack.length-1];
            stack.pop();
            if(temp === '{') cnt++;
        }
        
        if(s[i] === ']') {
            let temp = stack[stack.length-1];
            stack.pop();
            if(temp === '[') cnt++;
        }
        
    }
    
    if(cnt*2 === s.length) return true;
    else return false;
};

/*
Test Case:
1. {[]} // true
2. ([)] // false
*/

/*
    Problem Link: https://leetcode.com/problems/maximum-number-of-balloons/
    Language: JS
*/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    
    let b = 0, a = 0, l = 0, o = 0, n = 0;
    
    for(let i = 0; i < text.length; i++) {
        if(text[i] === 'b') b++;
        else if(text[i] === 'a') a++;
        else if(text[i] === 'l') l++;
        else if(text[i] === 'o') o++;
        else if(text[i] === 'n') n++;
    }
    
    l = Math.floor(l/2);
    o = Math.floor(o/2);
    
    let min = b;
    
    min = Math.min(min, b);
    min = Math.min(min, a);
    min = Math.min(min, l);
    min = Math.min(min, o);
    min = Math.min(min, n);
    
    return min;
};

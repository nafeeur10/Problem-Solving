/*
Problem Link: https://leetcode.com/problems/shortest-distance-to-a-character/
Algo: Two Pointer
Language: JS
*/
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
    let ans = new Array()
    console.log(s.length)
    
    for(let i = 0; i < s.length; i++) 
    {
        let characterPosition = i; // 0
        let min = s.length;
        
        for(let j = 0, k = s.length - 1; j < Math.floor(s.length/2), k >= Math.floor(s.length/2); j++, k--) 
        {
            if(s[j] === c) min = Math.min(min, Math.abs(characterPosition-j))
            if(s[k] === c) min = Math.min(min, Math.abs(characterPosition-k))      
        }
        
        ans.push(min);
    }
    
    return ans;
};

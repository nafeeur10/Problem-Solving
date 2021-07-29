/*
Problem Link: https://leetcode.com/problems/roman-to-integer/
Language: Javascript
*/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let sum = 0;

    let romanMap = new Map();
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);

    for(let i = 0; i < s.length; i++) {
        if(romanMap.get(s[i+1]) > romanMap.get(s[i]))
        {
            sum+=romanMap.get(s[i+1]) - romanMap.get(s[i]);
            i++;
        }
        else
        {
            sum+=romanMap.get(s[i]);
        }
    }

    return sum;
};

console.log(romanToInt("III"));

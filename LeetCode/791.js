/*
Problem Link: https://leetcode.com/problems/custom-sort-string/
Language: Javascript
*/

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
 var customSortString = function(order, s) {
    let ans = "";
    let smap = new Map();

    for(let i = 0; i < s.length; i++)
    {
        smap.set(s[i], smap.get(s[i]) === undefined ? 1 : smap.get(s[i])+1);
    }

    for(let i = 0; i < order.length; i++)
    {
        if(smap.get(order[i])!== undefined)
        {
            for(let j = 0; j < smap.get(order[i]); j++)
            ans+=(order[i]);
            smap.set(order[i], undefined);
        }
    }

    for(let [key, value] of smap)
    {
        if(key !==undefined)
        {
            for(let j = 0; j < value; j++)
            {
                ans+=(key);
            }
        }
    }
    return ans;
};

console.log(customSortString("cba", "aabccdd"));

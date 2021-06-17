/*
Problem Link: https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
Solution Language: Javascript
*/

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let sortedString = s.split('').sort().join(); /* aaabbbbcce */
    let map = [];
    
    for(let i = 0; i < sortedString.length; i++) 
    {
        if(sortedString[i] >= 'a' && sortedString[i] <= 'z')
        {
            if(map[sortedString[i]]) map[sortedString[i]]++;
            else map[sortedString[i]] = 1; 
        }
        
    }
    
   let mapValueSet = [];
    
   for(let key in map)
   {
      mapValueSet.push(map[key]);        
   }
    
   mapValueSet.sort(function(a, b){
       return b -a;
   });
    
   let ans = 0;
    
   for(let i = 0; i < mapValueSet.length; i++)
   {
       if(mapValueSet[i] == mapValueSet[i+1])
       {
          ans++;
          if(mapValueSet[i+1] > 1) {
              mapValueSet[i+1]--;
          }
       }
       else if(mapValueSet[i+1] > mapValueSet[i])
       {
           if(mapValueSet[i] == 1 || mapValueSet[i] == 0) {
               ans+=mapValueSet[i+1];
               mapValueSet[i+1]=0;
           }
           else {
            ans+= (mapValueSet[i+1] - mapValueSet[i] + 1);
            mapValueSet[i+1] -= (mapValueSet[i+1] - mapValueSet[i] + 1);
           }
       }    
   }
    
    
    
    return ans;
    
};

minDeletions("beaddedbacdcd");

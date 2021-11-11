/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let sMap = new Map()
    let tMap = new Map()
    
    for(let i = 0; i < s.length; i++) 
    {
        if(sMap.get(s[i]) === undefined && tMap.get(t[i]) === undefined)
        {
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
            continue;
        }
        
        else if(sMap.get(s[i]) !== t[i]) return false;
        
        if(sMap.get(s[i]) === undefined && tMap.get(t[i]) !== undefined)
        {
            return false;        
        }
    }
    return true
};

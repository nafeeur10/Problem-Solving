/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let map = new Map()

    for(let i = 0; i < nums.length; i++) 
    {
        if(map.get(nums[i]) === undefined) {
            map.set(nums[i], 1)
        }
        else
        {
            map.set(nums[i], map.get(nums[i])+1)
        }
    }

    let sortedMap = [...map].sort((a, b) => {
        return a[0] - b[0]
    })

    let max = 0
    for(let i = 1; i < sortedMap.length; i++) {
        let now = sortedMap[i]
        let prev = sortedMap[i-1]
        if(Math.abs(now[0] - prev[0]) === 1) {
            max = Math.max(max, Math.abs(now[1] + prev[1]))
        }
    }

    return max
};

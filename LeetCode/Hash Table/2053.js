/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    let map = new Map()

    for(let i = 0; i < arr.length; i++) {
        if(map.get(arr[i]) === undefined) {
            map.set(arr[i], 1)
            continue
        }
        map.set(arr[i], map.get(arr[i])+1)
    }

    let cnt = 0;

    for(const [key, value] of map) {
        if(value === 1) {
            cnt++;
        }

        if(cnt === k) {
            return key;
        }
    }

    return "";
};

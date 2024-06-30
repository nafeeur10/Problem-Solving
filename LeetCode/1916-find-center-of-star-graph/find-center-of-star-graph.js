/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let map = new Map();
    for(let i = 0; i < edges.length; i++) {
        let vertics = edges[i];
        map.set(vertics[0], map.get(vertics[0]) + 1 || 1);
        map.set(vertics[1], map.get(vertics[1]) + 1 || 1);
    }

    let max = 0;
    let ans = 0;

    for (const [key, value] of map) {
        if(value > max) {
            max = value;
            ans = key
        }
    }

    return ans;
};
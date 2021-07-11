/*
Problem Link: https://leetcode.com/problems/destination-city/
Language: Javascript
*/

/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {

    let map = new Map();
    let firstSource = paths[0][0];

    for(let i = 0; i <paths.length; i++) {
        let source = paths[i][0];
        let dest = paths[i][1];

        map.set(source, dest);
    }

    while(1)
    {
        let nextPoint = map.get(firstSource);
        if(nextPoint === undefined) {
            return firstSource;
        }
        [nextPoint, firstSource] = [firstSource, nextPoint];
    }
};

console.log(destCity([["A","Z"]]));

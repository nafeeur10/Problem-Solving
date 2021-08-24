/*
  Problem Link: https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
  Algorithm: Hash Table
  Language: Javascript
*/
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
    let mainArray = new Array();
    let map = new Array();

    for(let i = 0; i < groupSizes.length; i++) {
        let obj = {
            key: i,
            value: groupSizes[i]
        }
        map.push(obj);
    }

    map.sort(function(a, b){
        return a.value - b.value
    })


    let tempArray = new Array();

    for(let i = 0; i < map.length; i++) {
        tempArray.push(map[i].key)
        if(tempArray.length === map[i].value) {
            mainArray.push(tempArray);
            tempArray = new Array();
        }
        
    }

    return mainArray;
};

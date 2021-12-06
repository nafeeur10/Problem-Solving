/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    let minDiff = 3000000;

    let sortedArray = arr.sort( (a, b) => {
        return a - b;
    });

    for(let i = 1; i < sortedArray.length; i++) {
        
        let diff = Math.abs(sortedArray[i] - sortedArray[i - 1]);
        minDiff = Math.min(minDiff, diff);
        
    }

    let ansArray = new Array();

    for(let i = 1; i < sortedArray.length; i++) {
        let diff = Math.abs(sortedArray[i] - sortedArray[i - 1]);
        if(diff === minDiff) {
            let minArray = new Array();
            minArray.push(sortedArray[i - 1]);
            minArray.push(sortedArray[i]);
            ansArray.push(minArray);
        }
    }

    return ansArray;
};

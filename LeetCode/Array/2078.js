/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
    let distance = 0;
    for(let i = 0; i < colors.length; i++) {
        for(let j = i + 1; j < colors.length; j++) {
            if(colors[i] != colors[j]) {
                let diff = Math.abs(j - i);
                distance = Math.max(distance, diff);
            }
        }
    }
    return distance;
};

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let low = 1
    let high = n

    while(low <= high) {
        let mid = Math.floor((low + high)/2)

        if(guess(mid) === 0) {
            return mid
        }
        else if(guess(mid) === 1) {
            low = mid + 1
        }
        else if(guess(mid) === -1) {
            high = mid - 1
        }
    }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {

    for(let i = 0; i < numbers.length; i++)
    {
        let firstNumber = numbers[i]
        let secondNumber = target - firstNumber

        let low = 0
        let high = numbers.length
    
        while(low <= high) {
            let mid = Math.floor((low+high)/2)

            if(numbers[mid] == secondNumber && mid !== i)
            {
                return i < mid ? [i + 1, mid + 1] : [mid +1, i +1]
            }

            else if(numbers[mid] < secondNumber)
            {
                low = mid +1
            }
            else
            {
                high = mid - 1
            }
        }
    }
};

/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    if(num >= 0 && num <=9) return true
    
    let mainNumber = num

    var digit, result = 0
    // 25
    while( num ){
        digit = num % 10 
        result = (result * 10) + digit
        num = num/10|0 
    } 

    console.log(result);

    let reverse1 = result
    result = 0
    digit = 0

    while( reverse1 ){
        digit = reverse1 % 10  
        result = (result * 10) + digit
        reverse1 = reverse1/10|0 
    } 

    console.log(result);

    if(result === mainNumber)
    return true
    else
    return false
};

console.log(isSameAfterReversals(526));

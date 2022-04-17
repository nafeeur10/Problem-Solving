/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {

    let day = 7
    let donation = 1
    let initial = 1
    let total = 0

    for(let i = 1; i <= n; i++) {
        total+=donation
        if( donation % day == 0) {
            initial++
            donation = initial
            day++
            continue
        }
        donation++
    }
    return total;
};

console.log(totalMoney(20))

function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    if(n === 0) 
    return true

    if(flowerbed.length === 1 && (flowerbed[0] === 0 && n === 1))
    return true

    else if(flowerbed.length === 1 && (flowerbed[0] === 1 && n === 1))
    return false

    let cnt = 0

    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) 
        {
            if(i === 0 && flowerbed[i+1] !== 1) {
                flowerbed[i] = 1
                cnt++
                continue
            }
            else
            {
                if(flowerbed[i-1] !== 1 && (i !== flowerbed.length-1 && flowerbed[i+1] !== 1)) {
                    cnt++
                    flowerbed[i] = 1
                }
                else if(flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
                    cnt++
                    flowerbed[i] = 1
                }
            }
        }
    }

    if(cnt >= n) return true
    else return false
};

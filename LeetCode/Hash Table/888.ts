function sumOfArray(sumArray: number[]): number {
    let sum: number = 0
    for(let i = 0; i < sumArray.length; i++) {
        sum += sumArray[i]
    }
    return sum
}

function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {

    let aliceSizesSum: number = sumOfArray(aliceSizes)
    let bobSizesSum: number = sumOfArray(bobSizes)

    let middleMan = (aliceSizesSum + bobSizesSum) / 2

    let aliceMap = new Map()

    for(let i = 0; i < aliceSizes.length; i++) {
        let x = aliceSizes[i]
        aliceMap.get(x) === undefined ? aliceMap.set(x, 1) : aliceMap.set(x, aliceMap.get(x)+1)
    }

    for(let i = 0; i < bobSizes.length; i++) {
        let targetAlice = aliceSizesSum + bobSizes[i] - middleMan
        if(aliceMap.get(targetAlice)) {
            return [targetAlice, bobSizes[i]]
        }
    }

    return []
};

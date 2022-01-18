function judgeSquareSum(c: number): boolean {
    let sqrtC = Math.sqrt(c)

    for(let i = 0; i <= sqrtC; i++) 
    {
        let b = Math.sqrt(c - i*i)
        let b2 = c- (i*i)

        if(Number.isInteger(b)) {
            if(Math.floor(b*b) === b2) {
                return true
            }
        }
    }

    return false
};

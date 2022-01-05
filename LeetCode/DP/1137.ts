function tribonacci(n: number): number {
    let T = []
    T[0] = 0
    T[1] = 1
    T[2] = 1

    for(let i = 3; i <= 37; i++) {
        T[i] = T[i-1] + T[i-2] + T[i-3]
    }

    return T[n]
};

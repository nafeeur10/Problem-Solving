function validMountainArray(arr: number[]): boolean {
    if(arr.length <3) return false;
    else if(arr[0] > arr[1]) return false;
    else 
    {
        let decreasingFlag: boolean = false;

        for(let i = 0; i < arr.length-1; i++) {
            if(arr[i] === arr[i+1]) {
                return false;
            }
            else if(arr[i] > arr[i+1] && decreasingFlag === false) {
                decreasingFlag = true;
                continue;
            }
            else if(arr[i] <= arr[i+1] && decreasingFlag === true) {
                return false;
            }
        }

        if(decreasingFlag)
        return true;
        else
        return false;
    }
};

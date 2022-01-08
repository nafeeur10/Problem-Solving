
function singleNonDuplicate(nums: number[]): number {
    let low = 0
    let high = nums.length

    while (low <= high) {
        let mid = Math.floor((low+high)/2)

        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) 
        {
            return nums[mid]
        }

        else
        {
            let numsFromLowToMid = 0

            if(nums[mid] === nums[mid-1]) {
                mid--
                numsFromLowToMid = (mid - low)
                if(numsFromLowToMid%2===1) {
                    high = mid - 1
                }
                else {
                    low = mid + 2
                }
            }
            else {
                mid++
                numsFromLowToMid = (mid - (low + 1))
                if(numsFromLowToMid%2===1) {
                    high = mid - 2
                }
                else
                {
                    low = mid + 1
                }
            }
        }
    }
    return nums[0]
};

func missingNumber(nums []int) int {
	minNumber := nums[0]
	maxNumber := nums[0]
	sum := nums[0]

	for i := 1; i < len(nums); i++ {
		if minNumber > nums[i] {
			minNumber = nums[i]
		}

		if maxNumber < nums[i] {
			maxNumber = nums[i]
		}

		sum += nums[i]
	}

	if minNumber != 0 {
		return 0
	}
	/*
		  n(n+1)
		----------
		    2
	*/

	maxSum := (maxNumber * (maxNumber + 1)) / 2

	if maxSum == sum {
		return maxNumber + 1
	} else {
		return maxSum - sum
	}
}

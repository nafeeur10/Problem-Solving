func minOperations(nums []int) int {
	counter := 0
	for i := 1; i < len(nums); i++ {
		diff := nums[i] - nums[i-1]
		if diff == 0 {
			nums[i] = nums[i] + 1
			counter++
		} else if diff < 0 {
			diff = diff * (-1)
			nums[i] = nums[i] + diff + 1
			counter += diff + 1
		} else {
			continue
		}
	}
	return counter
}

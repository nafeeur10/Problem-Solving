func findMaxConsecutiveOnes(nums []int) int {
	cnt := 0
	max := 0

	for i := 0; i < len(nums); i++ {
		if nums[i] == 1 {
			cnt = cnt + 1
			if cnt > max {
				max = cnt
			}
		} else {
			cnt = 0
		}
	}
	return max
}

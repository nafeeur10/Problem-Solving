func findNumbers(nums []int) int {
	totalNumber := 0
	for i := 0; i < len(nums); i++ {
		temp := nums[i]
		cnt := 0
		for temp > 0 {
			temp = temp / 10
			cnt++
		}
		if cnt%2 == 0 {
			totalNumber++
		}
	}
	return totalNumber
}

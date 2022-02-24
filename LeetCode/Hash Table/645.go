package main

import "fmt"

func findErrorNums(nums []int) []int {
	hashMap := make(map[int]int)

	errorDuplicateNumber := 0
	sum := 0
	mainSum := 0

	for i := 0; i < len(nums); i++ {
		mainSum += (i + 1)
		sum += nums[i]
	}

	for i := 0; i < len(nums); i++ {
		hashMap[nums[i]]++
		if hashMap[nums[i]] == 2 {
			errorDuplicateNumber = nums[i]
			break
		}
	}

	removeDuplicateNumberFromSum := sum - errorDuplicateNumber
	misingNumber := mainSum - removeDuplicateNumberFromSum

	return []int{errorDuplicateNumber, misingNumber}
}

func main() {
	ans := findErrorNums([]int{1, 2, 2, 4})
	fmt.Println(ans)
}

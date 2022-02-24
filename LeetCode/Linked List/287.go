package main

import "fmt"

func findDuplicate(nums []int) int {
	slow := nums[0]
	fast := nums[nums[0]]

	for i := 0; ; i++ {
		if slow == fast {
			break
		}

		slow = nums[slow]
		fast = nums[nums[fast]]
	}

	fast = 0
	for i := 0; ; i++ {
		if slow == fast {
			break
		}
		slow = nums[slow]
		fast = nums[fast]
	}

	return slow
}

func main() {
	ans := findDuplicate([]int{1, 3, 4, 2, 2})
	fmt.Println(ans)
}

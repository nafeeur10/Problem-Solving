package main

import "fmt"

func twoOutOfThree(nums1 []int, nums2 []int, nums3 []int) []int {

	oneMap := make(map[int]int)
	twoMap := make(map[int]int)
	threeMap := make(map[int]int)
	fullMap := make(map[int]int)

	ans := make([]int, 0)

	for i := 0; i < len(nums1); i++ {
		oneMap[nums1[i]]++
		fullMap[nums1[i]]++
	}

	for i := 0; i < len(nums2); i++ {
		twoMap[nums2[i]]++
		fullMap[nums2[i]]++
	}

	for i := 0; i < len(nums3); i++ {
		threeMap[nums3[i]]++
		fullMap[nums3[i]]++
	}

	for key := range fullMap {
		if oneMap[key] >= 1 && twoMap[key] >= 1 && threeMap[key] >= 1 {
			ans = append(ans, key)
		} else if oneMap[key] >= 1 && twoMap[key] >= 1 {
			ans = append(ans, key)
		} else if oneMap[key] >= 1 && threeMap[key] >= 1 {
			ans = append(ans, key)
		} else if threeMap[key] >= 1 && twoMap[key] >= 1 {
			ans = append(ans, key)
		}
	}

	return ans
}

func main() {
	ans := twoOutOfThree([]int{1, 1, 3, 2}, []int{1, 1, 2, 3}, []int{1, 1, 3})
	fmt.Println(ans)
}

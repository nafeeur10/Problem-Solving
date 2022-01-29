package main

import "fmt"

func maxPower(s string) int {
	cnt := 0
	max := 0
	for i := 0; i < len(s)-1; i++ {
		if s[i] == s[i+1] {
			cnt++
			if cnt > max {
				max = cnt
			}
		} else {
			cnt = 0
		}
	}
	return max + 1
}

func main() {
	res := maxPower("leetcode")
	fmt.Println(res)
}

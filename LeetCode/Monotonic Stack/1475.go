package main

import "fmt"

func finalPrices(prices []int) []int {
	var ans []int

	for i := 0; i < len(prices); i++ {
		var flag bool
		flag = false
		for j := i + 1; j < len(prices); j++ {
			if prices[j] <= prices[i] {
				discountedPrice := prices[i] - prices[j]
				ans = append(ans, discountedPrice)
				flag = true
				break
			}
		}
		if flag == false {
			ans = append(ans, prices[i])
		}
	}
	return ans
}

func main() {
	var ans []int
	prices := []int{8, 4, 6, 2, 3}
	ans = finalPrices(prices)
	fmt.Println(ans)
}

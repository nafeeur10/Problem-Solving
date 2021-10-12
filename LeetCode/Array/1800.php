
<?php
/**
  * Problem Link: https://leetcode.com/problems/maximum-ascending-subarray-sum/
*/
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxAscendingSum($nums) {
        $maxValue = $nums[0];
        $prefixSum = $maxValue;
        
        for($i = 1; $i < count($nums); $i++) {
            if($nums[$i-1] < $nums[$i]) {
                $prefixSum+=$nums[$i];   
            }
            else {
                if($maxValue < $prefixSum)
                    $maxValue = $prefixSum;
                $prefixSum = $nums[$i];
            }
        }
        
        return $prefixSum > $maxValue ? $prefixSum : $maxValue;
    }
}

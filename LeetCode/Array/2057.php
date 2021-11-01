<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function smallestEqual($nums) {
        for($i = 0; $i < count($nums); $i++) {
            $modres = $i%10;
            if($modres === $nums[$i]) {
                return $i;
            }
        }
        
        return -1;
    }
}

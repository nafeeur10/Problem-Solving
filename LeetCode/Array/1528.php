<?php

class Solution {

    /**
     * @param String $s
     * @param Integer[] $indices
     * @return String
     */
    function restoreString($s, $indices) {
        $result = '';
        $tempArray = [];
        
        for($i = 0; $i < count($indices); $i++) {
            $tempArray[$i] = $s[$i];
        }

        for($i = 0; $i < count($indices); $i++) {
            $index = $indices[$i];
            $tempArray[$index] = $s[$i];
        }

        for($i = 0; $i < count($indices); $i++) {
            $result.=$tempArray[$i];
        }
        return $result;
    }
}

$solution = new Solution();
$solution->restoreString("codeleet", [4,5,6,7,0,2,1,3]);

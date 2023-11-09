<?php

class Solution {

    /**
     * @param Integer[][] $nums
     * @return Integer[]
     */
    function intersection($nums) {
        $map = [];
        $mainMap = [];
        for($i = 0; $i < count($nums); $i++) {
            for($j = 0; $j < count($nums[$i]); $j++) {
                if(isset($map[$nums[$i][$j]])) {
                    $map[$nums[$i][$j]]++;
                    if($map[$nums[$i][$j]] === count($nums)) {
                        array_push($mainMap, $nums[$i][$j]);
                    }
                } else {
                    $map[$nums[$i][$j]] = 1;
                    if($map[$nums[$i][$j]] === count($nums)) {
                        array_push($mainMap, $nums[$i][$j]);
                    }
                }
            }
        }

        asort($mainMap);
        return $mainMap;
    }
}

$sln = new Solution();
print_r($sln->intersection([[44,21,48]]));

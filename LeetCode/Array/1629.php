/*
Problem Link: https://leetcode.com/problems/slowest-key/
Language: PHP
*/

<?php
class Solution {

    /**
     * @param Integer[] $releaseTimes
     * @param String $keysPressed
     * @return String
     */
    function slowestKey($releaseTimes, $keysPressed) {
        $result = $releaseTimes[0];
        $ans = $keysPressed[0];
        $max = $releaseTimes[0];

        for($i = 1; $i < count($releaseTimes); $i++) {
            $result = $releaseTimes[$i] - $releaseTimes[$i-1];
            if($result >= $max ) {
                if($result == $max) {
                    $ans = $ans < $keysPressed[$i] ? $keysPressed[$i] : $ans;
                }
                else {
                    $ans = $keysPressed[$i];
                    $max = $result;
                }
            }
        }
        return $ans;
    }
}

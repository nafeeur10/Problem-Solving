<?php

class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function areOccurrencesEqual($s) {
        $map = [];

        for($i = 0; $i < strlen($s); $i++) {
            isset($map[$s[$i]]) ? $map[$s[$i]]++ : $map[$s[$i]] = 1; 
        }

        $result = $map[$s[0]];
        foreach ($map as $key => $value) {
            if($value !== $result) return false;
        }

        return true;
    }
}

$solution = new Solution();
$solution->areOccurrencesEqual("abacbc");

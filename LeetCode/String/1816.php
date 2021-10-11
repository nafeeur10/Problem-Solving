<?php

class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function truncateSentence($s, $k) {
        $word = '';
        $wordArray = "";
        $cnt = 0;
        $i = 0;
        for(; $i < strlen($s); $i++) {
            if($s[$i] === ' ' || $i === strlen($s)-1) {
                $cnt++;
                if($cnt === $k && $s[$i] !== " ") {
                    $word.=$s[$i];
                    $wordArray.=$word;
                    break;
                }
                else if($cnt === $k && $s[$i] === " "){
                    $wordArray.=$word;
                    break;
                }
                $word.=$s[$i];
                $wordArray.=$word;
                $word = '';
            }
            else
            {
                $word.=$s[$i];
            }
        }
        return $wordArray;
    }
}

$solution = new Solution();
$solution->truncateSentence("Hello how are you Contestant", 4);

<?php

class Solution {

    /**
     * @param String $word
     * @param String $ch
     * @return String
     */
    function reversePrefix($word, $ch) {
        $cnt = 0;
        $pointer = 0;
       
        for($i = 0; $i < strlen($word); $i++) {
            if($word[$i] === $ch) {
                $cnt++;
                $pointer = $i;
                break;
            }
        }

        if($cnt === 0) return $word;
        
        $ans = '';
        for($j = $pointer; $j >= 0; $j--) {
            $ans.=$word[$j];
        }
      

        for($i = $pointer+1; $i < strlen($word); $i++) {
            $ans.=$word[$i];
        }

        return $ans;
    }
}

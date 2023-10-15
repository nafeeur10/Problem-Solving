<?php

class Solution {

    /**
     * @param String $num1
     * @param String $num2
     * @return String
     */
    function addStrings($num1, $num2) {
        $len1 = strlen($num1);
        $len2 = strlen($num2);

        $carry = 0;
        $sum = [];

        $sumString = '';

        $lenForLoop = max($len1, $len2);
        
        for ($i = 0; $i < $lenForLoop; $i++) {

            if($len1 > 0) {
                $num1Char = (int)$num1[$len1-1];
            } else {
                $num1Char = 0;
            }
            
            if($len2 > 0) {
                $num2Char = (int)$num2[$len2-1];
            } else {
                $num2Char = 0;
            }

            array_push($sum, (int)(($num1Char + $num2Char + $carry) % 10));
            $carry = (int)(($num1Char + $num2Char + $carry) / 10);

            $len1--;
            $len2--;
        }

        if((int)$carry > 0) {
            array_push($sum, (int)$carry);
        }

        for ($i = count($sum)-1; $i >= 0; $i--) {
            $sumString .= $sum[$i];
        }

        return $sumString;
    }
}

$sln = new Solution();
echo $sln->addStrings("1", "9");

/*
Problem Link: https://leetcode.com/problems/sort-array-by-parity-ii/
Language: PHP
Solution 1
*/
<?php

class Solution {
    function sortArrayByParityII($nums) {
        $length = count($nums);
        
        $i = 0;
        $j = 1;

        $flag = false;

        while($i < $length && $j < $length) {
            while($i < $length) {
                if($nums[$i]%2 === 1) {
                    $flag = true;
                    break;
                }
                $i+=2;
            }

            while($j < $length && $flag === true) {
                if($nums[$j]%2===0) break;
                $j+=2;
            }

            if($flag === true && ($j < $length && $i < $length))
            {
                $temp = $nums[$i];
                $nums[$i] = $nums[$j];
                $nums[$j] = $temp;
                $flag = false;
            }
            
        }
        return $nums;
    }
}


/*
Solution 2:
*/

class Solution {
    function sortArrayByParityII($nums) {
        $length = count($nums);

        for($i = 0; $i < $length; $i++) {
            if($nums[$i] % 2 === 0) {
                array_push($nums, $nums[$i]);
            }
        }
        
        for($i = 0; $i < $length; $i++) {
            if($nums[$i] % 2 === 1) {
                array_push($nums, $nums[$i]);
            }
        }

        $recentLength = (2*$length)-1;
        $inc = 0;

        for($i = 0; $i < $length; $i+=2) {
            $nums[$i] = $nums[$length + $inc];
            $nums[$i+1] = $nums[$recentLength - $inc];
            $inc++;
        }

        for($i = 0; $i < $length; $i++) {
            array_pop($nums);
        }

        return $nums;
    }
}

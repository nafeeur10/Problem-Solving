<?php

class Solution {

    /**
     * @param Integer[] $deck
     * @return Boolean
     */

    function gcd($a, $b)
    {
        while ($b > 0)
        {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }

    function hasGroupsSizeX($deck) {
        $map = [];

        if(count($deck) < 2) return false;
        
        for($i = 0; $i < count($deck); $i++) {
            if(!isset($map[$deck[$i]])){
                $map[$deck[$i]] = 1;
            }
            else {
                $map[$deck[$i]]++;
            }
        }


        $keys = [];
        foreach ($map as $deck => $howManyDeck) {
            array_push($keys, $howManyDeck);
        }

        $m = 0;
        $gcd = $this->gcd($keys[$m], $keys[$m+1]);
        $minDeck = $gcd;
        
        for($m = 2; $m < count($keys); $m++) {
            $gcd = $this->gcd($gcd, $keys[$m]);
        }

        if($gcd === 1) return false;
        
        foreach ($map as $deck => $howManyDeck) {
            if($howManyDeck % $gcd !== 0) return false;
        }

        return true;
    }
}

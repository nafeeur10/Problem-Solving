class Solution {
    function isPrefixAndSuffix($str1, $str2) {
        // a aba

        //echo "Calculating: ". $str1 . " " . $str2 . "<br>";
        $prefix = '';
        $suffix = '';

        if (strlen($str2) < strlen($str1)) {
            return false;
        }

        for ($i = 0; $i < strlen($str1); $i++) {
            $prefix .= $str2[$i];
        }

        $str2 = strrev($str2);

        for($i = 0; $i < strlen($str1); $i++) {
            $suffix .= $str2[$i];
        }

        $suffix = strrev($suffix);

        //echo "Prefix: " . $prefix . " " . "Suffix: " .$suffix . "<br>";

        return ($prefix === $suffix) && ($prefix === $str1);
    }

    /**
     * @param String[] $words
     * @return Integer
     */
    function countPrefixSuffixPairs($words) {
        $cnt = 0;
        for ($i = 0; $i < count($words) - 1; $i++) {
            for ($j = $i + 1; $j < count($words); $j++) {
                if ($this->isPrefixAndSuffix($words[$i], $words[$j])) {
                    $cnt++;
                }
            }
        }
        return $cnt;
    }
}

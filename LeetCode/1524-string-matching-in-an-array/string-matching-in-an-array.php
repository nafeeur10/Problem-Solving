class Solution {

    function isSubStr($mainWord, $compWord) {
        $v = str_contains($mainWord, $compWord);
        if($v) {
            return true;
        }
        return false;
    }

     /**
     * @param String[] $words
     * @return String[]
     */
    function stringMatching($words) {
        $resultArray = [];

        for($i = 0; $i < count($words); $i++) {
            $mainWord = $words[$i];

            for($j = 0; $j < count($words); $j++) {

                $compWord = $words[$j];

                if($i !== $j && $mainWord !== $compWord)
                {
                    if($this->isSubStr($mainWord, $compWord)) {
                        $resultArray[] = $compWord;
                    }
                }
            }
        }

        for($i = 0; $i < count($resultArray)-1; $i++) {
            for($j = $i + 1; $j < count($resultArray); $j++) {
                if($resultArray[$i] === $resultArray[$j]) {
                    unset($resultArray[$i]);
                    $i++;
                }
            }
        }
        
        return array_unique($resultArray);
    }
}
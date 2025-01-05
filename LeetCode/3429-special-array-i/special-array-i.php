class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isArraySpecial($nums) {
        for ($i = 0; $i < count($nums) - 1; $i++) {
            if ((($nums[$i] % 2 === 0) && ($nums[$i + 1] % 2 === 0)) || (($nums[$i] % 2 === 1) && ($nums[$i + 1] % 2 === 1))) {
                return false;
            }
        }
        return true;
    }
}
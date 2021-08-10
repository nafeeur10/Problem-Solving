/*
Problem Link: https://leetcode.com/problems/design-a-stack-with-increment-operation/
Language: PHP
*/
<?php
class CustomStack {
    /**
     * @param Integer $maxSize
     */

    public $stack;
    public $stackMaxSize;
    public $stackLength;

    function __construct($maxSize) {
        $this->stackMaxSize = $maxSize;
        $this->stack = array();
        $this->stackLength = 0;
    }

    /**
     * @param Integer $x
     * @return NULL
     */
    function push($x) {
        if($this->stackLength < $this->stackMaxSize) {
            $this->stack[] = $x;
            $this->stackLength++;
        }
    }

    /**
     * @return Integer
     */
    function pop() {
        if($this->stackLength > 0) {
            $this->stackLength--;
            return array_pop($this->stack);
        } else return -1;
    }

    /**
     * @param Integer $k
     * @param Integer $val
     * @return NULL
     */
    function increment($k, $val) {
        for($i = 0; $i < $k && $i < $this->stackLength; $i++) {
            $this->stack[$i] += $val;
        }
    }
}

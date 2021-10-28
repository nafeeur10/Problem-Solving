<?php

class MinStack {
    /**
     */

    public $minStack;
    public $length;

    function __construct() {
        $this->minStack = [];
        $this->length = 0;
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function push($val) {
        if($this->length === 0)
        {
            $this->minStack [] = [$val, $val];
            $this->length++;
        }
        else
        {
            $previous_min = $this->minStack[$this->length - 1][1];
            if($previous_min > $val)
            {
                $previous_min = $val;
            }
            $this->minStack [] = [$val, $previous_min];
            $this->length++;
        }
    }
  
    /**
     * @return NULL
     */
    function pop() {
        $this->length--;
        array_pop($this->minStack);
    }
  
    /**
     * @return Integer
     */
    function top() {
        return $this->minStack[$this->length-1][0];
    }
  
    /**
     * @return Integer
     */
    function getMin() {
        return $this->minStack[$this->length-1][1];
    }
}

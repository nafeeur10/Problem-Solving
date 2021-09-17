/*
Problem Link: https://leetcode.com/problems/design-hashset/
Language: PHP
*/

<?php

class MyHashSet {
    /**
     * Initialize your data structure here.
     */
    
    public $hashSet; 
    
    function __construct() {
        $this->hashSet = [];
    }
  
    /**
     * @param Integer $key
     * @return NULL
     */
    function add($key) {
       $this->hashSet[$key] = true;
    }
  
    /**
     * @param Integer $key
     * @return NULL
     */
    function remove($key) {
        $this->hashSet[$key] = false;
    }
  
    /**
     * Returns true if this set contains the specified element
     * @param Integer $key
     * @return Boolean
     */
    function contains($key) {
        if($this->hashSet[$key] == true) return true;
        else return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * $obj = MyHashSet();
 * $obj->add($key);
 * $obj->remove($key);
 * $ret_3 = $obj->contains($key);
 */

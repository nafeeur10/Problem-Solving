/*
Problem Link: https://leetcode.com/problems/design-underground-system/
Language: PHP
*/

<?php
class UndergroundSystem {
    /**
    */

    public $stationMap;
    public $ans = [];

    function __construct() {
        $this->stationMap = [];
    }

    /**
        * @param Integer $id
        * @param String $stationName
        * @param Integer $t
        * @return NULL
    */
    function checkIn($id, $stationName, $t) {
        $this->stationMap[$id] = [
            "start" => $stationName, 
            "end" => null, 
            "time" => $t
        ]; 
    }

    /**
        * @param Integer $id
        * @param String $stationName
        * @param Integer $t
        * @return NULL
    */
    function checkOut($id, $stationName, $t) 
    {
        $start = $this->stationMap[$id]['start'];
        $time = (float)$t - $this->stationMap[$id]['time'];

        $this->ans[$start."+".$stationName][0] = isset($this->ans[$start."+".$stationName][0]) ? (float)($this->ans[$start."+".$stationName][0] + $time) : (float)$time;
        $this->ans[$start."+".$stationName][1] = isset($this->ans[$start."+".$stationName][1]) ? $this->ans[$start."+".$stationName][1]+1 : 1;
    }

    /**
        * @param String $startStation
        * @param String $endStation
        * @return Float
    */
    function getAverageTime($startStation, $endStation) {
        $name = $startStation."+".$endStation;
        return number_format((float) ($this->ans[$name][0]/$this->ans[$name][1]), 5, '.', '');
    }
}

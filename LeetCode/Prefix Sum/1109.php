/**
Problem Link: https://leetcode.com/problems/corporate-flight-bookings/
Algo: Prefix Sum
Language: PHP
*/

<?php

class Solution {

    /**
     * @param Integer[][] $bookings
     * @param Integer $n
     * @return Integer[]
     */
    function corpFlightBookings($bookings, $n) {
        $result = [];

        for($i = 0; $i < $n; $i++) {
            $result[$i] = 0;
        }

        for($i = 0; $i < sizeof($bookings); $i++) {
            $flight = $bookings[$i];
            $lr = $flight[0];
            $rr = $flight[1];
            $seat = $flight[2];

            $result[$lr-1] += $seat;
            if($rr < $n) $result[$rr] -= $seat;
        }

        for($i = 1; $i < sizeof($result); $i++) {
            $result[$i] += $result[$i-1];
        }
        return $result;
    }
}

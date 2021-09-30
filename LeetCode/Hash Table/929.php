<?php

class Solution {

    /**
     * @param String[] $emails
     * @return Integer
     */
    function numUniqueEmails($emails) {
        $uniqueEmails = [];
        $countUniqueEmail = 0;

        for($i = 0; $i < count($emails); $i++) 
        {
            $local = '';
            $global = '';

            $singleEmail = $emails[$i];
            $at = '@';
            $atPosition = strpos($singleEmail, $at);

            $global = substr($singleEmail, $atPosition+1);
            $local = substr($singleEmail, 0, $atPosition);

            $plus = '+';
            $plusPosition = strpos($singleEmail, $plus);

            if($plusPosition)
            $local = substr($singleEmail, 0, $plusPosition);
            
            $local = str_replace(".", "", $local);
            $mainEmail = $local . '@'. $global;
            
            if(!in_array($mainEmail, $uniqueEmails)) {
                array_push($uniqueEmails, $mainEmail);
            }
        }
        
        return count($uniqueEmails);
    }
}

$solution = new Solution();
$solution->numUniqueEmails(["test.email@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);


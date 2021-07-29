/*
Problem Link: https://leetcode.com/problems/palindrome-number/
Language: C++
*/

#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    bool isPalindrome(int x)
    {
        stringstream ss;
        ss << x;
        string str = ss.str();

        string revstr = str;
        reverse(str.begin(), str.end());

        if(str==revstr)
            return true;
        else
            return false;
    }
};

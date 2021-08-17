/*
Problem Link: https://leetcode.com/problems/maximum-69-number/
Language: C++
*/


class Solution {
public:
    int maximum69Number (int num) {
        int pointer = 0;
        int length = 0;
        int flag6 = 0;
        int sum = num;

        while(num) {
            int t = num%10;
            num/=10;
            if(t == 6) {
                flag6 = 1;
                pointer = length;
            }
            length++;
        }

        if(flag6==1)
        sum+= 3*pow(10, pointer);
        return sum;
    }
};

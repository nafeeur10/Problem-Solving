/*
Problem Link: https://leetcode.com/problems/sign-of-the-product-of-an-array/
Algo: Array + Math
Language: C++
*/

class Solution {
public:
    int arraySign(vector<int>& nums) {
        int zero = 0;
        int positive = 0;
        int negative = 0;
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] > 0) positive++;
            else if(nums[i] == 0) zero++;
            else negative++;
        }

        if(zero > 0) return 0;
        else if(negative == 0 || negative%2 == 0) return 1;
        else return -1;
    }
};
